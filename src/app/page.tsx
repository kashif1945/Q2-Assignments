import Image from 'next/image'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
    <>
      <section className="header">
        <nav>
          <a href="index.html" className="logo">Xplore
            <i className="fab fa-staylinked"></i>kill
          </a>
          <div className="nav-links" id="navLinks">
            {/* <!-- Reposnive bar open and close --> */}
            <i className="fa fa-times"
            //  onclick="hideMenu()"
             ></i>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/course">Course</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <i className="fa fa-bars"
          //  onclick="showMenu()"
           ></i>
          {/* <!-- Reposnive bar open and close --> */}
        </nav>

        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <a href="#" className="hero_btn">Visit Us To Know More</a>
        </div>
      </section>

      {/* <!-- Course Section Start --> */}
      <section className="course">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br/> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="course-col">
            <h3>Undergraduate Programs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.</p>
          </div>
          <div className="course-col">
            <h3>Graduate Programs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.</p>
          </div>
          <div className="course-col">
            <h3>Adult Learning & Degree Completion</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.</p>
          </div>
        </div>
      </section>
      {/* <!-- Course Section End --> */}

      {/* <!-- Campus Section Start--> */}

      <section className="campus">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="campus-col">
            <img src="img/Campus1.png" alt="" />
              <div className="layer">
                <h3>DELHI</h3>
              </div>
          </div>
          <div className="campus-col">
            <img src="img/Campus2.png" alt="" />
              <div className="layer">
                <h3>HYDERABAD</h3>
              </div>
          </div>
          <div className="campus-col">
            <img src="img/Campus3.png" alt="" />
              <div className="layer">
                <h3>MUMBAI</h3>
              </div>
          </div>
        </div>
      </section>
      {/* <!-- Campus Section End --> */}

      {/* <!-- Facilities Section Start --> */}
      <section className="facilities">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="facilities-col">
            <img src="img/libary.png" alt="" />
              <h3>Best Libary</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
              </p>
          </div>
          <div className="facilities-col">
            <img src="img/playground.png" alt="" />
              <h3>Athletics</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
              </p>
          </div>
          <div className="facilities-col">
            <img src="img/food.png" alt="" />
              <h3>Tasty and Healthy Food</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
              </p>
          </div>
        </div>
      </section>
      {/* <!-- Facilities Section End --> */}

      {/* <!-- Testimonials Section Start --> */}
      <section className="testimonials">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="testimonials-col">
            <img src="img/user.png" alt="oo.." />
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                  praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                  deserunt. In quia repellat maxime.</p>
                <h3>Student Name</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
          </div>
          <div className="testimonials-col">
            <img src="img/user.png" alt="oo.." />
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                  praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                  deserunt. In quia repellat maxime.</p>
                <h3>Student Name</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
              </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials Section End --> */}

      {/* <!-- Call To Action Section Start --> */}
      <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <a href="contact.html" className="hero_btn">CONTACT US</a>
      </section>
      {/* <!-- Call To Action Section End --> */}

      {/* <!-- Footer Section Start --> */}
      <section className="footer">
        <hr />
          <h4>About Us</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
          </p>

          <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
          </div>
          <p>Made with <i className="fas fa-heart"></i> by <a href="index.html">Sagar Developer</a></p>
          <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
      </section>
    </>
  )
}
