<template>
	<view class="home-container">
		<!-- 顶部欢迎区 -->
		<view class="welcome-row">
			<view>
				<text class="welcome-back">Welcome Back!</text>
				<view class="user-row">
					<text class="user-name">John Lucas</text>
					<text class="wave">👋</text>
				</view>
			</view>
			<image class="avatar" src="https://placehold.co/60x60/EFEFEF/AAAAAA&text=头像"
				style="width:48px;height:48px;border-radius:50%;border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.06);" />
		</view>

		<!-- 搜索区 -->
		<view class="search-row">
			<view class="search-box">
				<text class="search-icon">🔍</text>
				<input class="search-input" placeholder="Search a job or position" />
			</view>
			<view class="filter-btn">
				<image class="filter-icon" src="/static/icons/filter.png" />
			</view>
		</view>

		<!-- Featured Jobs 区 -->
		<view class="section-row">
			<text class="section-title">Featured Jobs</text>
			<text class="see-all" @click="goToMarket">See all</text>
		</view>
		<scroll-view class="featured-scroll" scroll-x enable-flex>
			<view class="featured-card" v-for="job in featuredJobs" :key="job.id">
				<view class="flex-row">
					<div class="user-avatar">
						<image class="user-avatar-img" :src="job.logo" />
					</div>

					<view class="flex-cloum">
						<text class="job-title">{{ job.title }}</text>
						<text class="company">{{ job.company }}</text>
					</view>
				</view>

				<view class="job-tags">
					<text class="job-tag" v-for="tag in job.tags" :key="tag">{{ tag }}</text>
				</view>
				<view class="job-info-row">
					<text class="salary">{{ job.salary }}</text>
					<text class="location">{{ job.location }}</text>
				</view>
			</view>
		</scroll-view>

		<!-- Recommended Jobs 区 -->
		<view class="section-row">
			<text class="section-title">Recommended Jobs</text>
			<text class="see-all" @click="goToMarket">See all</text>
		</view>
		<view class="recommended-row">
			<view class="recommended-card" v-for="job in recommendedJobs" :key="job.id">
				<image class="user-avatar-img-lg radius" :src="job.logo" />
				<view class="company-info">
					<text class="job-title">{{ job.title }}</text>
					<text class="company">{{ job.company }}</text>
					<text class="salary">{{ job.salary }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				featuredJobs: [{
						id: 1,
						logo: 'https://logo.clearbit.com/google.com',
						title: 'Product Designer',
						company: 'Google',
						tags: ['Design', 'Full-Time', 'Junior'],
						salary: '$160,000/year',
						location: 'California, USA'
					},
					{
						id: 2,
						logo: 'https://logo.clearbit.com/apple.com',
						title: 'iOS Developer',
						company: 'Apple',
						tags: ['Mobile', 'Full-Time'],
						salary: '$150,000/year',
						location: 'Cupertino, USA'
					}
				],
				recommendedJobs: [{
						id: 3,
						logo: 'https://logo.clearbit.com/dribbble.com',
						title: 'UX Designer',
						company: 'Dribbble',
						salary: '$80,000/y'
					},
					{
						id: 4,
						logo: 'https://logo.clearbit.com/facebook.com',
						title: 'Sr Engineer',
						company: 'Facebook',
						salary: '$96,000/y'
					}
				]
			};
		},
		methods: {
			goToMarket() {
				uni.navigateTo({
					url: '/pages/market/market'
				});
			}
		}
	};
</script>

<style>
	.flex-row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.flex-cloum {
		display: flex;
		flex-direction: column;
	}

	.home-container {
		background: #ffffff;
		min-height: 100vh;
		padding: 0 16px;
	}

	.welcome-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 24px;
	}

	.welcome-back {
		color: #b0b0b0;
		font-size: 15px;
	}

	.user-row {
		display: flex;
		align-items: center;
		margin-top: 2px;
	}

	.user-name {
		font-size: 22px;
		font-weight: bold;
		color: #222;
	}

	.wave {
		margin-left: 6px;
		font-size: 20px;
	}

	.avatar {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		border: 2px solid #fff;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	}

	.search-row {
		display: flex;
		align-items: center;
		margin: 24px 0 12px 0;
	}

	.search-box {
		flex: 1;
		display: flex;
		align-items: center;
		background: #f3f4f6;
		border-radius: 16px;
		padding: 0 12px;
		height: 40px;
	}

	.search-icon {
		font-size: 18px;
		color: #b0b0b0;
		margin-right: 6px;
	}

	.search-input {
		border: none;
		background: transparent;
		flex: 1;
		font-size: 15px;
	}

	.filter-btn {
		margin-left: 10px;
		width: 40px;
		height: 40px;
		background: #f3f4f6;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
	}

	.filter-icon {
		width: 26px;
		height: 26px;
	}

	.section-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 18px 0 8px 0;
	}

	.section-title {
		font-size: 18px;
		font-weight: bold;
		color: #222;
	}

	.see-all {
		font-size: 14px;
		color: #b0b0b0;
	}

	.featured-scroll {
		display: flex;
		flex-direction: row;
		overflow-x: scroll;
		margin-bottom: 10px;
	}

	.featured-card {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 280px;
		height: 186px;
		flex-shrink: 0;
		background-color: rgba(53, 104, 153, 0.9);
		border-radius: 20px;
		margin-right: 16px;
		padding: 24px;
		color: #fff;
		box-shadow: 0 4px 16px rgba(59, 89, 152, 0.08);
	}

	.featured-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(/static/icons/maskGroup.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		opacity: 0.4;
		z-index: 1;
	}

	.user-avatar {
		width: 46px;
		height: 46px;
		margin-right: 16px;
		border-radius: 8px;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.user-avatar-img {
		width: 22px;
		height: 22px;
	}

	.user-avatar-img-lg {
		width: 43px;
		height: 43px;
	}
	
	.radius {
		border-radius: 50%;
	}
	
	.job-title {
		flex: 1;
		font-size: 17px;
		font-weight: bold;

	}

	.company {
		font-size: 14px;

		color: #FFF;
	}

	.job-tags {
		display: flex;
		margin-bottom: 10px;
	}

	.job-tag {
		background: rgba(255, 255, 255, 0.15);
		border-radius: 65px;
		padding: 4px 16px;
		font-size: 12px;
		margin-right: 8px;
	}

	.job-info-row {
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		color: #FFF;
	}

	.recommended-row {
		display: flex;
		gap: 15px;
		margin-bottom: 24px;
	}

	.recommended-card {
		box-sizing: border-box;
		width: 156px;
		height: 164px;
		background: #ffeef2;
		border-radius: 24px;
		padding: 20px 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.recommended-card:nth-child(2) {
		background: #eaf1ff;
	}
	
	.company-info {
		display: flex;
		flex-shrink: 0;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 12px;
	}
	
	.company-info .job-title {
		color: #0D0D26;
		line-height: 19px;
		font-size: 14px;
		
	}
	
	.company-info .company {
		color: #7A7C85;
		line-height: 19px;
		font-size: 12px;
		margin: 4px 0 8px 0;
	}
	
	.company-info .salary {
		color: var(--Black, #0D0D26);
		text-align: center;
		font-family: Poppins;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 160%;
		letter-spacing: -0.12px;
	}
	
</style>