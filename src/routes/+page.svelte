

<div class="lmfao">

  <div class="lol lol3"></div>
  <div class="lol lol2"></div>
  <div class="lol lol1"></div>
  <div class="inner">
  <h2>Hello, I am <span>Ali Alaa</span></h2>
</div>
</div>
<style lang="scss">
  @keyframes rofl {
    to {
      clip-path: polygon(51.8% 27.5%, 73.4% 70.5%, 91.3% 43.3%, 100% 66.8%, 100% 100%, 0% 100%, 0% 42.3%, 0% 29.5%, 15.9% 61%, 31% 61.8%);
    }
  }
  @keyframes rofl2 {
    to {
      clip-path: polygon(54.2% 25.5%, 72.2% 41%, 89.8% 9%, 99.7% 0%, 100% 100%, 0% 100%, 0% 42.3%, 0% 60.8%, 18% 49.3%, 29% 0%);


    }
  }
  @keyframes rofl3 {
    to {
      clip-path: polygon(54.2% 25.5%, 72.2% 41%, 89.8% 9%, 99.7% 0%, 100% 100%, 0% 100%, 0% 42.3%, 0% 60.8%, 18% 49.3%, 29% 0%);


    }
  }
  .lmfao {
    padding-top: 40vh;
    padding-bottom: 5vh;
    position: relative;
    background: linear-gradient(0deg, #05010f 0%, #05010f 100%);
    .inner {
      max-width: var(--content-width);
      margin: 0 auto;
      padding: 0 30px;
    }
    h2 {
      --shadow-color: var(--purple2);
      color: #ffffffeb;
      position: relative;
      font-size: 4rem;
      span {
        text-decoration: underline wavy var(--purple2);
      }
      // background-image: linear-gradient(90deg, rgb(239, 53, 239), rgb(173, 65, 255));
    // color: transparent;
    // background-clip: text;
      // text-shadow: 1px 1px var(--shadow-color), 
      //           2px 2px var(--shadow-color), 
      //           3px 3px var(--shadow-color);
      //           // 4px 4px var(--shadow-color),
      //           // 5px 5px var(--shadow-color),
      //           // 6px 6px var(--shadow-color);
    }
  }
  .lol {
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .lol1 {
    background: linear-gradient(0deg, #ffffff00 0%, rgba(255, 255, 255, 0.09) 100%);
    clip-path: polygon(59.5% 80%, 78.2% 50.8%, 91.4% 68.5%, 100% 56.2%, 100% 100%, 0% 100%, 0% 42.3%, 0% 65%, 16.3% 46.8%, 40% 56.3%);
    animation: 30s both infinite alternate linear rofl;
    // opacity: 0.1;
  }
  .lol2 {
    background: linear-gradient(0deg, #ffffff00 0%, rgba(255, 255, 255, 0.06) 100%);
    clip-path: polygon(53.4% 36.5%, 73.3% 24.3%, 91.3% 43.3%, 99.7% 22.8%, 100% 100%, 0% 100%, 0% 42.3%, 0% 3.3%, 18.3% 25%, 29.1% 10.5%);

    animation: 30s both infinite alternate linear rofl2;
    // opacity: 0.1;
  }
  .lol3 {
    background: linear-gradient(0deg, #ffffff00 0%, rgba(255, 255, 255, 0.03) 100%);
    clip-path: polygon(49.1% 8.5%, 68.6% 20%, 89.4% 7%, 100% 11%, 100% 100%, 0% 100%, 0% 14%, 9% 18.8%, 19.8% 12.3%, 32.4% 15.8%);

    animation: 30s both infinite alternate linear rofl2;
    // opacity: 0.1;
  }
</style>