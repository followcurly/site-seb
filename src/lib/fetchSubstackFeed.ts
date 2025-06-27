import Parser from 'rss-parser';

export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  content: string;
  author: string;
  excerpt?: string;
  categories?: string[];
  enclosure?: {
    url: string;
    type?: string;
    length?: string;
  };
}

const parser = new Parser({
  customFields: {
    item: [
      ['media:thumbnail', 'mediaThumbnail'],
      ['media:content', 'mediaContent'],
      ['description', 'description'],
      ['content:encoded', 'contentEncoded'],
    ]
  }
});

export async function fetchSubstackFeed(feedUrl: string): Promise<SubstackPost[]> {
  try {
    const feed = await parser.parseURL(feedUrl);
    
    return feed.items.map(item => {
      const content = item.content || (item as any).contentEncoded || '';
      const contentSnippet = item.contentSnippet || item.description || '';
      
      // Extract better excerpt from content
      const excerpt = extractExcerpt(content, contentSnippet);
      
      // Extract categories from content or tags
      const categories = extractCategories(item);

      return {
        title: item.title || 'Untitled',
        link: item.link || '#',
        pubDate: item.pubDate || new Date().toISOString(),
        contentSnippet,
        content,
        author: item.creator || feed.title || 'Unknown',
        excerpt,
        categories,
        enclosure: item.enclosure ? {
          url: item.enclosure.url,
          type: item.enclosure.type,
          length: String(item.enclosure.length)
        } : undefined
      };
    });
  } catch (error) {
    console.error('Error fetching Substack feed:', error);
    return [];
  }
}

function extractExcerpt(content: string, fallback: string): string {
  if (!content && !fallback) return '';
  
  // Remove HTML tags
  const textContent = (content || fallback).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  
  // Get first few sentences or first paragraph
  const sentences = textContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
  if (sentences.length >= 2) {
    return sentences.slice(0, 2).join('. ') + '.';
  }
  
  // Fallback to character limit
  return textContent.length > 200 ? textContent.substring(0, 200).trim() + '...' : textContent;
}



function extractCategories(item: any): string[] {
  const categories: string[] = [];
  
  // Check for categories in various RSS fields
  if (item.categories) {
    categories.push(...item.categories);
  }
  
  if (item['dc:subject']) {
    categories.push(item['dc:subject']);
  }
  
  // Remove duplicates and empty values
  return [...new Set(categories.filter(cat => cat && cat.trim().length > 0))];
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatDateRelative(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`;
  return `${Math.ceil(diffDays / 365)} years ago`;
}

export function truncateText(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
} 