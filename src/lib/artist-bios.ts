export interface ArtistBio {
  name: string;
  paragraphs: string[];
}

/**
 * Per-exhibition artist bio text, keyed by project ID.
 * Used in ExhibitionDetailTemplate for both image-based blocks
 * (replaces "Artist information forthcoming.") and text-only blocks
 * (when no artist images exist in the folder).
 */
export const EXHIBITION_ARTIST_BIOS: Record<string, ArtistBio[]> = {
  "handful-of-dust": [
    {
      name: "Juri Wi",
      paragraphs: [
        "Juri Wi's practice unfolds as a search for the «lean body» — a state stripped of societal calluses and structural excess. Her work becomes an act of peeling back layers to expose what flows beneath. She imagines bodies as porous and alive, where fermentation, decomposition, and breath exist in unbroken dialogue. Through this, she invites openness, vulnerability, and renewal.",
        "Her visual and conceptual language challenges overgrown systems of distribution, creating channels for reconnection. Each piece acts as a liberation from silence and stagnation. By grounding her practice in slowness and rooted presence, she resists the abrasion of constant friction. Her works speak of integrity, absorption, and the quiet strength to remain whole.",
        "Informed by both touch and metaphor, her art envisions a skin just beyond searing—a surface both bright and full of air, sustaining life in its most essential form.",
      ],
    },
    {
      name: "Ángela Leyva",
      paragraphs: [
        "Ángela Leyva's work explores the intersections of identity, memory, and technology. She merges painting with artificial intelligence, creating characters that question the boundaries between the human and the artificial.",
        "Her portraits—often inspired by the faces of patients with congenital disorders—unsettle conventional notions of beauty. They confront viewers with the complexity and vulnerability inherent in human existence. By combining traditional painterly techniques with machine learning processes, Leyva generates a visual dialogue between the real and the virtual. This dialogue opens a space for reflection on the shifting nature of selfhood.",
        "Her compositions operate as psychological landscapes where intimacy, distortion, and empathy coexist. Each work becomes an act of resistance to the homogenization of identity. Based in Mexico City, Leyva has exhibited widely in Mexico and abroad, with solo and group shows in major museums and international venues, earning multiple awards in contemporary painting.",
      ],
    },
    {
      name: "Nicky Sparre-Ulrich",
      paragraphs: [
        "Nicky Sparre-Ulrich's practice is built around working with layers that reflect the passage of time and the overlap of cultural strata. He merges contemporary visual language with historical imagery, creating a charged field of meanings.",
        "The artist explores the origins of culture, gazing into forgotten images and traces that lead deep into history. His works become an attempt to capture the beginnings of human memory and the roots of collective imagination.",
        "Born in 1986, Nicky Sparre-Ulrich works with painting, maybe with various mediums. In 2017, he graduated from The Royal Danish Academy of Fine Arts.",
      ],
    },
    {
      name: "Yutaro Inagaki",
      paragraphs: [
        "Inagaki creates figurative paintings that reimagine everyday life within futuristic urban landscapes. His work blends the immediacy of street culture with a refined studio practice. Figures in his paintings are often rendered in synthetic, black surfaces, masking cultural or regional markers. This anonymity evokes a post-human presence within familiar cityscapes.",
        "His visual language reflects a deep interest in the relationship between individuals and the collective. By stripping away personal identity, he foregrounds shared emotional and spatial experiences.",
        "Themes of repression, desire, and gentrification run through his compositions. Each canvas becomes a stage for the tensions embedded in contemporary metropolitan life. Raised near Tokyo and shaped by graffiti and urban exploration, Inagaki's practice remains rooted in the texture of the city. He is currently based in London, expanding his work to murals, public art, and gallery settings.",
      ],
    },
    {
      name: "Chunkook Lee",
      paragraphs: [
        "Chunkook Lee integrates nature-based patterns and motifs with human anatomical structures, constructing symbolic visual imagery rooted in mythology, fantasy, and religion. Working across sculpture, installation, and objects, he employs diverse materials and everyday items to create distinctive, unconventional forms.",
        "By merging different techniques and materialities, his practice expands painting into three dimensions, while flat sculptural elements enhance depth and texture. Through this interplay between two- and three-dimensional forms, Lee explores the shared essence of nature and life, encouraging a broader perception of their interconnectedness.",
      ],
    },
    {
      name: "Yasy Bachurina",
      paragraphs: [
        "Yasy's practice is built on fragment and time. The artist is inspired by archaic images of material culture which, going deep into history, make it possible to speak about our common present.",
        "She works with objects as new carriers of memory - not reproducing the past, but collecting its echoes in the present through oil painting and work with objects, using natural «primary materials» - wood, clay, stone, as well as found artifacts.",
      ],
    },
    {
      name: "Irina Razumovskaya",
      paragraphs: [
        "Irina Razumovskaya creates hand-built ceramic sculptures that intertwine female identity, cultural memory, and the experience of diaspora. Her works reimagine decay as a site of beauty, resilience, and transformation. Rooted in material sensitivity, her forms carry historical references while asserting a contemporary voice. Each piece holds the tension between fragility and endurance.",
        "Her practice bridges traditions of craftsmanship with conceptual narratives. Through this, she situates ceramics as both vessel and storyteller. Based in London, Razumovskaya exhibits internationally and has works in major public collections across Europe and Asia. She has received prestigious awards, including recognition from the Loewe Craft Prize and the Faenza Prize.",
      ],
    },
    {
      name: "Goujirou",
      paragraphs: [
        "Goujirou's art emerges from the collision of critical analysis and free experimentation. His works explore the boundaries between fashion and sculpture, turning garments into statements.",
        "Volume and form play a central role, treated not as decoration but as an independent language. Materials become tools of inquiry, whether textile, sponge, or unconventional surfaces. Mistakes and failures are integral to his method, as destruction often leads to new silhouettes. This process opens a space for intuition and unpredictable outcomes.",
      ],
    },
  ],

  "hybrid-chronicles": [
    {
      name: "Andrey Berger",
      paragraphs: [
        "Andrey Berger works at the intersection of painting, drawing, sculpture, installation, and digital media. His art explores form, line, and space - delicate strokes build structures that hover between abstraction and figuration. His works often gain a three-dimensional quality, extending beyond the surface and existing between painting and architecture.",
        "Berger investigates the connection between the natural and the urban, the micro and the macro, observing how biological, social, and cultural systems interact. For him, space is a living organism where the real and the imagined, the physical and the digital merge into a new, sensory perception of reality.",
      ],
    },
    {
      name: "Hwia Kim",
      paragraphs: [
        "Hwia Kim, an artist based in South Korea, explores the complex interactions between the body and consciousness, as well as between technology and humans, focusing on the blurred boundaries where ambiguity arises between different components.",
        "She mainly creates innovative works through experiments with various technologies, including VR, deep learning, and robotics, emphasizing interactive art where the audience's involvement is important. This approach aims to create ongoing movement between the artwork and the audience, viewing each as a distinct world.",
      ],
    },
  ],

  "expanding-light": [
    {
      name: "Ellen Barratt",
      paragraphs: [
        "Ellen Barratt is a Manchester-based artist who earned her Bachelor of Fine Arts from Chelsea College of Art in 2018, following a Foundation Diploma in Fine Art from Manchester School of Art. Her work explores the relationship between light, space, and perception through a variety of mediums, including photography and immersive installations.",
      ],
    },
  ],

  "tree-of-life": [
    {
      name: "Ellen Sheidlin",
      paragraphs: [
        "Sheidlin's work reflects on the role of art in society and the ways in which it can shape our perception of the world. The mixture of the digital and the physical, the dream-like and the real, the material and the intangible, in the long term produces an ever-wondering projection of versatile personality for the viewer themselves: each of us can hold many different facets, sensations and worlds within ourselves. In the parallel universe of Sheidlin, there is nothing stopping us to change skin, personality, character or even species.",
      ],
    },
  ],

  "orkhan-mammadov": [
    {
      name: "Orkhan Mammadov",
      paragraphs: [
        "Orkhan Mammadov (b. 1990, Ganja, Azerbaijan) is an internationally recognized new media artist whose practice explores the intersections of art, science, and technology. Renowned for his pioneering work with artificial intelligence and generative art, Mammadov's installations and data-driven projects transform the collective memory into immersive aesthetic experiences.",
        "Educated in computer science, visual communication design, and fine arts, Mammadov cultivated an interdisciplinary worldview from the outset. A self-taught graphic and web designer by the age of ten, he began competing on the international stage as a teenager, rapidly expanding his skill set to encompass product, motion, and interactive design, as well as photography and video. His early fascination with merging creativity and computation laid the foundation for the boundary-pushing art he would later develop.",
      ],
    },
  ],

  "tenu-bangkok": [
    {
      name: "Yasy Bachurina",
      paragraphs: [
        "Yasy's practice is built on fragment and time. The artist is inspired by archaic images of material culture which, going deep into history, make it possible to speak about our common present.",
        "She works with objects as new carriers of memory - not reproducing the past, but collecting its echoes in the present through oil painting and work with objects, using natural «primary materials» - wood, clay, stone, as well as found artifacts.",
      ],
    },
  ],

  "noise-australia": [
    {
      name: "Ellen Sheidlin",
      paragraphs: [
        "Sheidlin's work reflects on the role of art in society and the ways in which it can shape our perception of the world. The mixture of the digital and the physical, the dream-like and the real, the material and the intangible, in the long term produces an ever-wondering projection of versatile personality for the viewer themselves: each of us can hold many different facets, sensations and worlds within ourselves. In the parallel universe of Sheidlin, there is nothing stopping us to change skin, personality, character or even species.",
      ],
    },
  ],

  "materialization-sensual": [
    {
      name: "Ellen Sheidlin",
      paragraphs: [
        "Sheidlin's work reflects on the role of art in society and the ways in which it can shape our perception of the world. The mixture of the digital and the physical, the dream-like and the real, the material and the intangible, in the long term produces an ever-wondering projection of versatile personality for the viewer themselves: each of us can hold many different facets, sensations and worlds within ourselves. In the parallel universe of Sheidlin, there is nothing stopping us to change skin, personality, character or even species.",
      ],
    },
  ],

  "70-desert-stones": [
    {
      name: "Ellen Sheidlin",
      paragraphs: [
        "Sheidlin's work reflects on the role of art in society and the ways in which it can shape our perception of the world. The mixture of the digital and the physical, the dream-like and the real, the material and the intangible, in the long term produces an ever-wondering projection of versatile personality for the viewer themselves: each of us can hold many different facets, sensations and worlds within ourselves. In the parallel universe of Sheidlin, there is nothing stopping us to change skin, personality, character or even species.",
      ],
    },
  ],
};
