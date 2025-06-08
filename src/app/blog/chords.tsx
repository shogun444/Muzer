export default function Chords(){
  const blogs = [
  
      { 
        src : '/note.webp',
        heading: "The Magic Chords: Understanding the Basics of Chord Progressions",
        content: `Do you ever wonder how a song is born? It may seem like magic, but great songwriters often use the simple trick of chord progressions to build their songs. Let's look at the fundamentals of chord progressions, how they are used, and how you can start incorporating them into your own music.`
      },
      {
        heading: "Introduction",
        content: `From John Lennon to John Legend, Bach to Beck, our greatest songwriters have all used one common music theory tool in their craft: chord progressions.

But what exactly are chord progressions, and why should musicians and songwriters care so much about them? To answer these questions, let's delve into the basics of chord progressions, their impact on songwriting, and how they can be employed on various instruments to great success.`
      },
      {
        heading: "Chord Progressions: What Are They?",
        content: `At their core, chord progressions are a succession of chords played one after another in a particular order. But on a deeper level, these progressions serve as the building blocks of songs—the canvas where songwriters can paint with melody, harmony, and emotion.

Beyond serving as the foundation of a song, a chord progression has the power to evoke particular emotions, create deliberate moods, or set serious vibes for the song. When used skillfully, they take listeners on a musical journey carefully crafted by the songwriter.`
      },
      {
        heading: "Common Ground: The Most Common Chord Progressions",
        content: `A songwriter can choose from an almost endless number of chord progressions when writing a song. However, some progressions have become certified classics that defy genre and era. Here are four of the most common ones:

**I-IV-V-I**: Found in rock, pop, and blues. In C major: C (I), F (IV), G (V), C (I).

**I-V-vi-IV**: Used in countless pop hits like "Let It Be" by The Beatles. In C major: C (I), G (V), A minor (vi), F (IV).

**ii-V-I**: A jazz staple with a smooth resolution. In C major: D minor (ii), G (V), C (I).

**I-vi-IV-V**: Popular in love songs and doo-wop. In C major: C (I), A minor (vi), F (IV), G (V).`
      },
      {
        heading: "The Impact: What Makes Chord Progressions So Important?",
        content: `It’s easy to overlook chord progressions' impact, but they play vital roles in songwriting:

**Emotional Power**: Even simple progressions can evoke strong emotions. Major chords feel uplifting; minor chords often feel introspective or sad.

**Song Structure**: Chord progressions guide the listener through the musical narrative and provide a satisfying sense of structure and repetition.

**Melodic Reinforcement**: Chords create a harmonic foundation for melodies. They help bring out the best in vocal lines, guitar leads, and synth patterns.

**Outside the Box**: Songwriters can also use unusual progressions to create new sounds and surprise listeners, leading to unique and memorable music.`
      }
    
  

];
return(<>
{blogs.map((itm,idx)=>(<div className="max-w-300 mx-auto" key={idx}>
 
    <h1 className="text-xl font-semibold  mt-2">{itm.heading}</h1>
    <h1 className="text-sm text-neutral-400 mt-3">{itm.content}</h1>
  
</div>))}
</>)
}