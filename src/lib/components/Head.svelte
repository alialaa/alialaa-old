<script lang="ts">
	import { page } from '$app/stores';
	import defaultImage from '$lib/assets/icon.png';

	type Props = {
		title?: string;
		description?: string;
		image?: string;
		includeDefaultTitle?: boolean;
	};
	let {
		title = '',
		includeDefaultTitle = true,
		description = 'A freelance front-end web developer from Egypt. Here you can find my latest articles, courses, tutorials and more.',
		image = defaultImage
	}: Props = $props();
	let isSingBlogPage = $derived($page.route?.id?.includes('blog/[id]'));

	let finalTitle = $derived.by(() => {
		const defaultTitle = `Ali Alaa - Front-end Web Developer`;
		if (!title) return defaultTitle;
		if (!includeDefaultTitle) return title;
		return `${title}${title && ' | '}Ali Alaa - Front-end Web Developer`;
	});

	// let blogPostData = $derived.by(() => {
	// 	if (isSingBlogPage) {
	// 		return {
	// 			'@context': 'https://schema.org',
	// 			'@type': 'BlogPosting',
	// 			headline: title,
	// 			image: [image]
	// 		};
	// 	}
	// 	return null;
	// });

	const breadcrumbs = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: $page.url.origin
			}
		]
	};
	if ($page.route.id?.includes('/blog')) {
		breadcrumbs.itemListElement.push({
			'@type': 'ListItem',
			position: 2,
			name: 'The Blog',
			item: `${$page.url.origin}/blog`
		});
		if ($page.route?.id?.includes('blog/[slug]')) {
			breadcrumbs.itemListElement.push({
				'@type': 'ListItem',
				position: 3,
				name: title,
				item: `${$page.url.href}`
			});
		}
	} else if ($page.route.id?.includes('/courses')) {
		breadcrumbs.itemListElement.push({
			'@type': 'ListItem',
			position: 2,
			name: 'Courses',
			item: `${$page.url.origin}/courses`
		});
		if ($page.route?.id?.includes('courses/[slug]')) {
			breadcrumbs.itemListElement.push({
				'@type': 'ListItem',
				position: 3,
				name: title,
				item: `${$page.url.href}`
			});
		}
	} else if ($page.route.id?.includes('/about')) {
		breadcrumbs.itemListElement.push({
			'@type': 'ListItem',
			position: 2,
			name: 'About',
			item: `${$page.url.origin}/about`
		});
	} else if ($page.route.id?.includes('/uses')) {
		breadcrumbs.itemListElement.push({
			'@type': 'ListItem',
			position: 2,
			name: 'Uses',
			item: `${$page.url.origin}/uses`
		});
	} else if ($page.route.id?.includes('/contact')) {
		breadcrumbs.itemListElement.push({
			'@type': 'ListItem',
			position: 2,
			name: 'Contact',
			item: `${$page.url.origin}/contact`
		});
	} else if ($page.route.id?.includes('/tags/[slug]')) {
		breadcrumbs.itemListElement.push({
			'@type': 'ListItem',
			position: 2,
			name: title,
			item: `${$page.url.href}`
		});
	}
</script>

<svelte:head>
	<title>{finalTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={image} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={isSingBlogPage ? 'article' : 'website'} />
	<meta property="fb:app_id" content="" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	{@html '<script type="application/ld+json">' + JSON.stringify(breadcrumbs) + '</script>'}
</svelte:head>
