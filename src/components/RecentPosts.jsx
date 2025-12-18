import '../styles/RecentPosts.css';

import photo from '../assets/test.png';

const RecentPosts = () => {
	return (
		<section className="recent-posts">
			<div className="recent-posts__header">
				<h2 className="recent-posts__title">Our Recent Post</h2>
				<button className="recent-posts__view-all">View All</button>
			</div>

			<article className="featured-post">
				<div className="featured-post__image">
					<img src={photo} />
				</div>
				<div className="featured-post__content">
					<div className="featured-post__meta">
						<span className="featured-post__category">DEVELOPMENT</span>
						<span className="featured-post__date">16 March 2023</span>
					</div>
					<h3 className="featured-post__title">
						How to make a Game look more attractive with New VR & AI Technology
					</h3>
					<p className="featured-post__excerpt">
						Google has been investing in AI for many years and bringing its
						benefits to individuals, businesses and communities. Whether it's
						publishing state-of-the-art research, building helpful products or
						developing tools and resources...
					</p>
					<a href="#" className="featured-post__link">
						Read More
					</a>
				</div>
			</article>
			<ul className="recent-posts__l">
				<li className="post-card">
					<div className="post-card__image">
						<img src={photo} alt="Travelling In Sea" />
					</div>
					<div className="post-card__content">
						<div className="post-card__left">
							<span className="post-card__category">Travel</span>
							<span className="post-card__date">13 March 2023</span>
						</div>
						<h3 className="post-card__title">
							8 Rules Of Travelling In Sea You Need To Know
						</h3>
						<p className="post-card__text">
							Travelling in sea has many advantages. Some of the advantages of
							transporting goods by sea include: you can ship large volumes at
							costs
						</p>
						<a href="#" className="post-card__link">
							Read More...
						</a>
					</div>
				</li>

				<li className="post-card">
					<div className="post-card__image">
						<img src={photo} />
					</div>
					<div className="post-card__content">
						<div className="post-card__left">
							<span className="post-card__category">DEVELOPMENT</span>
							<span className="post-card__date">11 March 2023</span>
						</div>
						<h3 className="post-card__title">
							How to build strong portfolio and get a Job in UI/UX
						</h3>
						<p className="post-card__text">
							Capitalize on low hanging fruit to identify a ballpark value added
							activity to beta test. Override the digital divide with additional
							clickthroughs from
						</p>
						<a href="#" className="post-card__link">
							Read More...
						</a>
					</div>
				</li>

				<li className="post-card">
					<div className="post-card__image">
						<img src={photo} />
					</div>
					<div className="post-card__content">
						<div className="post-card__left">
							<span className="post-card__category">Sports</span>
							<span className="post-card__date">10 March 2023</span>
						</div>
						<h3 className="post-card__title">
							How to Be a Professional Footballer in 2023
						</h3>
						<p className="post-card__text">
							Organically grow the holistic world view of disruptive innovation
							via workplace diversity and empowerment. survival strategies to
							ensure proactive
						</p>
						<a href="#" className="post-card__link">
							Read More...
						</a>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default RecentPosts;
