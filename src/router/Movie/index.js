export default{
	path:'/movie', // 电影
	component: () => import('@/views/Movie'),
	children:[
		{
			path:'city',	 // 地图
			component: () => import('@/components/City'),
		},
		{
			path:'nowPlaying', // 正在热映
			component: () => import('@/components/NowPlaying'),
		},
		{
			path:'comingSoon', // 即将上映
			component: () => import('@/components/ComingSoon'),
		},
		{
			path:'search', // 搜索
			component: () => import('@/components/Search'),
		},
		{
			path:'/movie', // 加载之前显示 优先显示那个
			redirect: '/movie/nowPlaying',
		}
	]
}