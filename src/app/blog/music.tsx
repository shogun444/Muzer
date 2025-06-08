export default function Music() { 

  
const blogs = [
  {src : '/design.webp',
    heading: "When Design Meets Music: Inside Moises' Journey to the Apple Design Awards Nomination",
    content: `How Human-centered Design Philosophy Empowers Creative Potential.`
  },
  {
    heading: "Introduction",
    content: `At Moises, we believe music has the power to inspire, connect, and transform lives. But making music can be a complex, intimidating journey, one often overshadowed by technical barriers and complicated tools.

Our mission has always been clear: to empower creative potential by striping away anything that stands between musicians and their state of flow. For us, design isn't simply about aesthetics; it's about deeply understanding human creativity and crafting experiences that make creating music fluid, intuitive, and joyful.

From our earliest days as a startup, we saw firsthand the immense value that thoughtful, human-centered design could bring to the music industry. By placing designers at the core of our team from day one, we prioritized empathy and clarity, ensuring every interaction was intuitive, meaningful, and inspiring. This foundational belief guided us as we scaled rapidly from a passionate team in Salt Lake City, Utah and João Pessoa, Brazil, to serving over 60 million musicians across the globe.

As our community expanded, so did our commitment to design excellence. We built a diverse team with rich cultural backgrounds and professional experiences, all united by a shared passion for music and innovation. This collective vision has shaped our core design principles, helping us consistently deliver powerful yet beautifully simple tools that musicians everywhere rely on to express themselves without limits.`
  },
  {
    heading: "How We Design at Moises",
    content: `Our team brings together designers, illustrators, photographers, film editors, technologists and musicians who don’t just understand the craft, they live it. We approach each challenge with both precision and imagination, blending technical rigor with artistic instinct to design tools that feel as expressive as the music they help create.

Our design is structured around four core principles: Human, Universal, Simple, Efficient. These values shape everything we create, guiding us to build experiences that foster skill development and help musicians reach their highest artistic potential.`
  },
  {
    heading: "Human",
    content: `Empathy is the core of our design process. We deeply explore our users’ emotions, behaviors, and ambitions, crafting experiences that resonate profoundly.

Our designers, researchers, and product managers routinely immerse themselves in the realities of musicians, from beginners learning their first chords to educators like Danny Morris from Berklee College of Music, as well as faculty from other leading institutions around the world. Each decision we make reflects our commitment to serving the human at the other end of the device, creating meaningful connections through our product.`
  },
  {
    heading: "Universal",
    content: `Inclusivity and accessibility are foundational to our approach. Moises is fully localized into 33 languages, not as an afterthought, but as an intentional product strategy embraced from day one.

This global mindset, rooted in our team’s multicultural diversity, has significantly contributed to our expansive reach and success. Recognizing music as a universal language, we designed Moises to be effortlessly accessible, ensuring users worldwide engage naturally with our platform in their native languages.`
  },
  {
    heading: "Simple",
    content: `We believe in clarity through simplicity. Instead of adding more features, we focus on removing friction and designing intuitive, seamless interactions that keep musicians in their creative flow.

Our AI Mixer is a prime example. It takes a highly advanced technology and transforms it into a clean, accessible mobile experience. Likely the first of its kind on a mobile app, it brought stem separation out of the studio and into the hands of millions. With just a few swipes or taps, users can isolate vocals, mute instruments, and shape their sound instantly.

Many apps have followed, but Moises set the standard. Because when the design gets out of the way, creativity takes over.`
  },
  {
    heading: "Efficient",
    content: `Efficiency is at the heart of how we design and build. Every feature we release goes through cycles of iteration, validation, and refinement to ensure it not only works well, but works effortlessly. Our goal is to remove anything that slows musicians down and focus instead on what helps them move forward with more clarity and speed.

Take our chord progression view on iPad as an example. When a user hits play and turns on the chord grid view, the interface adapts instantly. The chords take over the screen in large, readable letters, perfectly synced with the music. It’s a small detail that makes a huge difference. Instead of navigating menus or getting distracted by a cluttered interface, musicians can stay fully engaged in the moment, focused on playing and creating.

This level of simplicity is only possible through deep user research and relentless attention to detail. We observe how people play, practice, and learn. We listen, test, and refine constantly. When a product truly works, it gets out of the way and lets musicians do what they do best.`
  }
];

  return(<>
{blogs.map((itm,idx)=>(<div  className="max-w-300 mx-auto" key={idx}>

    <h1 className="text-xl font-semibold  mt-2">{itm.heading}</h1>
    <h1 className="text-sm text-neutral-400 mt-3">{itm.content}</h1>
</div>))}
  </>)
}
