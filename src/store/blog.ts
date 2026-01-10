import { getCollection } from "astro:content";

export async function getBlogPosts() {
	const allPosts = await getCollection("blog");
	const sortedPosts = allPosts.sort((a, b) =>
		new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
	);

	return {
		featuredPost: sortedPosts[0],
		otherPosts: sortedPosts.slice(1),
	};
}
