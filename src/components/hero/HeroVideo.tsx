export function HeroVideo() {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="rounded-md overflow-hidden border border-light/10 shadow-2xl">
        {/* <video 
          className="w-full"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://storage.googleapis.com/betterscreenshot-demo/workflow-demo.mp4" type="video/mp4" />
        </video> */}
        <img src="/images/landing.png" alt="intro" className="w-full" />
      </div>
    </div>
  );
}
