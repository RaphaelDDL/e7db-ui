import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const BASE_HEADER = 'EpicSevenDB.com - Epic7 Wiki and Database';

const routes = [
    { path: '/index.html', redirect: '/' },
    {
        path: '/',
        component: () => import('@/js/components/general/Home.vue'),
        meta: {
            title: `${BASE_HEADER}`,
            metaTags: [
                {
                    name: 'description',
                    content:
                        'The Epic Seven Wiki and Database with information on Heroes, Artifacts, Catalysis, Items, Quests, Guides and more!',
                },
                {
                    property: 'og:description',
                    content:
                        'The Epic Seven Wiki and Database with information on Heroes, Artifacts, Catalysis, Items, Quests, Guides and more!',
                },
            ],
        },
    },
    {
        path: '/hero/:fileId',
        component: () => import('@/js/components/heroes/Detail.vue'),
        meta: {
            title: `| Hero | ${BASE_HEADER}`,
            metaTags: [
                {
                    name: 'description',
                    content:
                        'See detailed information about a Hero in EpicSeven game, including Artwork, Rarity, Class, Zodiac Sign, Attributes, Skills and their effects, Awakening and more!',
                },
                {
                    property: 'og:description',
                    content:
                        'See detailed information about a Hero in EpicSeven game, including Artwork, Rarity, Class, Zodiac Sign, Attributes, Skills and their effects, Awakening and more!',
                },
            ],
        },
    },
    {
        path: '/heroes',
        component: () => import('@/js/components/heroes/List.vue'),
        meta: {
            title: `Heroes | ${BASE_HEADER}`,
            metaTags: [
                {
                    name: 'description',
                    content:
                        'See information about all Heroes in EpicSeven game, including Rarity, Class, Element and more!',
                },
                {
                    property: 'og:description',
                    content:
                        'See information about all Heroes in EpicSeven game, including Rarity, Class, Element and more!',
                },
            ],
        },
    },
    {
        path: '/guidesntools',
        component: () => import('@/js/components/guidesntools/List.vue'),
        meta: {
            title: `Guides and Tools | ${BASE_HEADER}`,
            metaTags: [
                {
                    name: 'description',
                    content:
                        'Discover Guides and Tools to help you in your quest to become a stronger Heir in EpicSeven game.',
                },
                {
                    property: 'og:description',
                    content:
                        'Discover Guides and Tools to help you in your quest to become a stronger Heir in EpicSeven game.',
                },
            ],
        },
    },
    {
        path: '/about',
        component: () => import('@/js/components/general/About.vue'),
        meta: {
            title: `About | ${BASE_HEADER}`,
            metaTags: [
                {
                    name: 'description',
                    content: 'Discover more about what is EpicSevenDB, who runs and how to contribute to the project!',
                },
                {
                    property: 'og:description',
                    content: 'Discover more about what is EpicSevenDB, who runs and how to contribute to the project!',
                },
            ],
        },
    },
    {
        path: '/privacy-policy',
        component: () => import('@/js/components/general/PrivacyPolicy.vue'),
        meta: {
            title: `Privacy Policy | ${BASE_HEADER}`,
            metaTags: [
                {
                    name: 'description',
                    content: 'Read our Privacy Policy on what data is used and gathered.',
                },
                {
                    property: 'og:description',
                    content: 'Read our Privacy Policy on what data is used and gathered.',
                },
            ],
        },
    },
    {
        path: '/artifact/:fileId',
        component: () => import('@/js/components/artifacts/Detail.vue'),
        meta: {
            title: `| Artifact | ${BASE_HEADER}`,
            metaTags: [
                {
                    name: 'description',
                    content:
                        'See detailed information about an Artifact on EpicSeven game, including Artwork, Rarity, Class Specificity, Attributes, Skill Effects and more!',
                },
                {
                    property: 'og:description',
                    content:
                        'See detailed information about an Artifact on EpicSeven game, including Artwork, Rarity, Class Specificity, Attributes, Skill Effects and more!',
                },
            ],
        },
    },
    {
        path: '/artifacts',
        component: () => import('@/js/components/artifacts/List.vue'),
        meta: {
            title: `Artifacts | ${BASE_HEADER}`,
            metaTags: [
                {
                    name: 'description',
                    content:
                        'See information about all Artifacts on EpicSeven game, including Rarity, Class Specificity, Attributes and more!',
                },
                {
                    property: 'og:description',
                    content:
                        'See information about all Artifacts on EpicSeven game, including Rarity, Class Specificity, Attributes and more!',
                },
            ],
        },
    },
    // https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
    {
        path: '*',
        component: () => import('@/js/components/general/Error.vue'),
        meta: {
            title: `Oops.. | ${BASE_HEADER}`,
        },
    },
];

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history',
});

// https://alligator.io/vuejs/vue-router-modify-head/
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags);
    //   const previousNearestWithMeta = from.matched
    //     .slice()
    //     .reverse()
    //     .find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags
        .map((tagDef) => {
            const tag = document.createElement('meta');

            Object.keys(tagDef).forEach((key) => {
                tag.setAttribute(key, tagDef[key]);
            });

            // We use this to track which meta tags we create, so we don't interfere with other ones.
            tag.setAttribute('data-vue-router-controlled', '');

            return tag;
        })
        // Add the meta tags to the document head.
        .forEach((tag) => document.head.appendChild(tag));

    next();
});

//  https://serversideup.net/google-analytics-vue-router-single-page-application/
router.afterEach(() => {
    if ('scrollTo' in window) {
        window.scrollTo({
            top: 0,
            left: 0,
            // behavior: 'smooth',
        });
    }
});

export default router;
