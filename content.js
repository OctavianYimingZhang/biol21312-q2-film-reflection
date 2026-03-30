window.SITE_CONTENT = {
  hero: {
    title: "How accurately do filmmakers portray mental health and neurological conditions?",
    intro:
      "This site argues that film is usually better at conveying subjective experience and social fallout than at reproducing clinical detail. That is why framing, dignity, and stigma matter more than surface symptom-checking.",
    filmTabs: [
      {
        key: "trainspotting",
        label: "Trainspotting",
        title: "Trainspotting",
        body:
          "Trainspotting is better understood as a portrayal of opioid use disorder than as a clinically exact account of heroin withdrawal. Addiction science defines addiction around compulsive drug seeking and use despite harm, and NIH teaching material explicitly uses Trainspotting as an example of life becoming organized around obtaining and using the drug. But standard opioid-withdrawal descriptions emphasize flu-like, gastrointestinal, autonomic, and anxiety or insomnia symptoms; hallucinations are not standard features and are notable enough to appear mainly as rare case reports. So the film gets the behavioral logic of dependence more right than the medical detail.",
        note:
          "For a decriminalisation lecture, I would use Trainspotting before Requiem for a Dream because Requiem is more useful as an example of catastrophic sensationalism and treatment stigma than as a basis for sober policy discussion.",
      },
      {
        key: "requiem",
        label: "Requiem for a Dream",
        title: "Requiem for a Dream",
        body:
          "Requiem for a Dream is less a representative clinical portrait than a stylized catastrophe model. Sara Goldfarb's stimulant-related collapse is clinically plausible because amphetamine misuse can produce persecutory delusions, hallucinations, and psychosis. But reviews of drug depictions note that even strongly anti-drug films like Requiem can unintentionally make intoxication visually alluring. Its ECT scene is not a fair guide to modern psychiatry: modern ECT is performed under general anesthesia, whereas film and TV reviews show ECT is commonly portrayed without anesthesia, as coercive, painful, and damaging, which is largely inaccurate and stigmatizing.",
      },
      {
        key: "father",
        label: "The Father",
        title: "The Father",
        body:
          "The Father is the strongest of the three for lived phenomenology. Caregiver and scholarly responses praise it for placing viewers inside the confusion of dementia, and the misrecognition, temporal disorientation, paranoia, impaired judgment, and memory disturbance it shows are consistent with standard dementia symptom descriptions. One correction: the film depicts dementia, but it does not clearly establish Alzheimer's disease on-screen; outside commentary treats Alzheimer's as plausible rather than certain. The main caveat is ethical rather than diagnostic: dementia scholarship warns that portrayals centered on terror, loss of self, and caregiver burden can reinforce fear, and The Gerontologist explicitly warned that The Father may deepen fearful public perceptions even while being artistically powerful.",
      },
    ],
  },
  video: {
    title: "Insert the recorded presentation here",
    caption:
      "The site is designed so the video becomes the dominant object near the top of the page, with the written argument working as a concise analytical companion rather than a transcript.",
    note: "This build now uses a compressed local MP4 so the presentation can play directly inside the site.",
    localMp4: "./presentation.mp4",
    embedUrl: "",
    placeholderTitle: "YouTube keynote-style placeholder",
    placeholderText:
      "This area is reserved for the final pre-recorded presentation. Keep the written site concise and let the video carry the longer spoken explanation.",
    placeholderCode: "Add a local MP4 path or YouTube embed URL in content.js",
  },
  criteria: [
    {
      title: "Experiential accuracy",
      copy: "Does the film feel true to the condition as lived, not only as diagnosed?",
    },
    {
      title: "Stigma impact",
      copy: "Does it widen empathy, or reinforce fear, blame, and distance?",
    },
    {
      title: "Agency and dignity",
      copy: "Do characters remain people rather than becoming diagnosis symbols?",
    },
    {
      title: "Education vs exploitation",
      copy: "Does dramatic form clarify suffering, or turn it into spectacle?",
    },
  ],
  frameworkNote:
    "Film is typically better at conveying subjective experience and social fallout than at showing symptom frequencies, differential diagnosis, treatment, or prognosis accurately. Reviews of mental-illness portrayals find that entertainment media often exaggerate danger, unpredictability, and distorted treatment images; but research also shows that accurate, empathetic films can improve knowledge and reduce stigma, especially when they are framed educationally rather than consumed as pure sensation.",
  discussion: {
    intro:
      "Taken together, the real question is not whether film may depict illness, but whether it can turn highly stigmatized suffering into something viewable without reducing the person to a condition. Entertainment itself needs unpacking: tragedy belongs to the entertainment industry, but that does not mean illness must become enjoyable. What deserves criticism is not watchability itself, but watchability built on depersonalization, misinformation, and the consumption of pain. Research shows that film and popular media can increase empathy and be used in medical or psychiatric teaching, yet they also frequently dramatize and distort mental illness and its treatments, turning characters into dangerous, unpredictable, or ridicule-worthy figures.",
    tabs: [
      {
        key: "art",
        label: "Is depicting illness in art inherently improper?",
        title: "Artistic legitimacy",
        summary: [
          "Excluding addiction, cognitive decline, and psychic pain from art would exclude real human experience from cultural expression. Film is legitimate here because it can stage subjective time, craving, fractured memory, and disorientation better than a textbook can.",
          "Its ethical limit is not fiction itself but misleading fiction. Cinema may compress and stylize, but it crosses the line when exaggeration and spectacle begin to stand in for knowledge.",
        ],
      },
      {
        key: "stigma",
        label: "Do these films repeat stigma scripts?",
        title: "Stigma scripts",
        summary: [
          "Taken together, these films engage two stigma scripts rather than three isolated cases. One script frames addiction as moral failure, loss of control, and deserved punishment. The other frames dementia as loss of self, social death, and pure caregiver burden.",
          "The ethical question is whether the films dismantle those scripts or quietly reproduce them. A representation can be dramatic and still be harmful if it reinforces fear and social distance.",
        ],
      },
      {
        key: "personhood",
        label: "Has the illness swallowed the person?",
        title: "Personhood and agency",
        summary: [
          "Legitimacy depends less on whether a condition appears on screen than on whether the condition swallows the person. Dehumanizing narratives worsen misrecognition, exclusion, and health outcomes, while more humanized portrayals can reduce negative attitudes.",
          "What matters is whether viewers remember a person with history, relationships, desire, shame, humor, and dignity, or only a diagnostic label. That is the core ethical test across all three films.",
        ],
      },
      {
        key: "audience",
        label: "What kind of pleasure does the viewing invite?",
        title: "Audience response",
        summary: [
          "The problem is not whether the films are engaging. Tragedy can be gripping without being exploitative. The real issue is the kind of pleasure they organize: do they cultivate understanding, moral reflection, and proximity, or shock, disgust, superiority, and the safe consumption of other people's pain?",
          "Media do not only inform audiences; they also train audiences how to react. The ethics of entertainment therefore depend on whether viewers learn empathy or rejection.",
        ],
      },
      {
        key: "policy",
        label: "Do these films shape public and policy imagination?",
        title: "Social and policy imagination",
        summary: [
          "These films are never only private stories. Addiction and cognitive decline are tied to treatment access, poverty, caregiving, exclusion, and public policy. That means representation helps shape public imagination, not just private feeling.",
          "Narratives that restore suffering to social structure can increase support for treatment and harm reduction without increasing stigma. Narratives that emphasize danger, failure, or deserved punishment push audiences back toward moral condemnation.",
        ],
      },
      {
        key: "teaching",
        label: "Can they be used responsibly in teaching?",
        title: "Teaching and use",
        summary: [
          "They can be used in teaching, but not uncritically. Film may increase empathy in the short term, especially when combined with discussion and reflection, yet strong material can also retraumatize or mislead when shown without framing.",
          "These works are best used as case studies in representation, stigma, and public imagination, not as stand-alone evidence about disease itself. They need context, correction, and discussion.",
        ],
      },
    ],
  },
  comparison: {
    summary:
      "Both addiction films show damage. The real difference is how they position the audience in relation to addicted people.",
    matrix: {
      experiential: {
        title: "Experiential accuracy",
        explainer: "Which film best captures lived experience rather than distant observation?",
        cards: [
          {
            film: "Trainspotting",
            body: "Strong on attraction, repetition, and why relapse remains plausible.",
          },
          {
            film: "Requiem for a Dream",
            body: "Strong on collapse, but weaker on ordinary personhood and context.",
          },
          {
            film: "The Father",
            body: "Strongest overall because disorientation becomes the viewer's experience too.",
          },
        ],
      },
      stigma: {
        title: "Stigma impact",
        explainer: "Which film is most likely to deepen understanding instead of blame?",
        cards: [
          {
            film: "Trainspotting",
            body: "More humane because wit and social texture prevent total dehumanisation.",
          },
          {
            film: "Requiem for a Dream",
            body: "Most likely to reinforce horror and punishment as the dominant frame.",
          },
          {
            film: "The Father",
            body: "Most empathetic because the audience shares uncertainty instead of judging from outside.",
          },
        ],
      },
      dignity: {
        title: "Agency and dignity",
        explainer: "Which film keeps the character most fully intact as a person?",
        cards: [
          {
            film: "Trainspotting",
            body: "Keeps characters socially recognisable even while they are self-destructive.",
          },
          {
            film: "Requiem for a Dream",
            body: "Most at risk of reducing characters to cautionary symbols.",
          },
          {
            film: "The Father",
            body: "Preserves dignity most clearly because vulnerability never cancels subjectivity.",
          },
        ],
      },
      exploitation: {
        title: "Education vs exploitation",
        explainer: "Which film clarifies experience, and which risks commodifying suffering?",
        cards: [
          {
            film: "Trainspotting",
            body: "Educationally valuable, but ethically unstable because its formal energy can seduce.",
          },
          {
            film: "Requiem for a Dream",
            body: "Most vulnerable to spectacle because punishment dominates audience response.",
          },
          {
            film: "The Father",
            body: "Most defensible because form remains tied to understanding.",
          },
        ],
      },
    },
  },
  father: {
    cardTitle: "Why it ranks first ethically",
    lead:
      "The Father shows that cinema can be dramatic and still protect dignity. The character remains vulnerable without becoming a puzzle, and the condition is rendered through subjectivity rather than spectacle.",
    quote:
      "It is the clearest example here of dramatic form deepening understanding rather than consuming suffering.",
    detailSummary: "Optional benchmark note",
    detail:
      "The film is not a clinical summary of Alzheimer's disease, but it is the strongest experiential model because confusion is reproduced structurally rather than merely described.",
  },
  verdict: {
    text:
      "In conclusion, filmmakers tend to portray mental health and neurological conditions more accurately at the level of subjective experience than at the level of clinical detail. They can capture confusion, distress, dependency, and loss in ways that are emotionally convincing, but they often simplify symptoms, exaggerate extremes, and omit the social and medical context.",
    note:
      "For that reason, it is legitimate to use these conditions in film only under clear ethical conditions: the character must remain a full human being rather than a diagnostic label, and the condition must not be reduced to shock, pity, or spectacle. So the issue is not whether these conditions can appear in entertainment, but whether the film uses them to build understanding and empathy, or merely to consume suffering as drama.",
    ranking: [
      {
        title: "1. The Father",
        line: "Strongest ethical model",
        reason:
          "It aligns cinematic form with patient experience and preserves dignity without flattening illness into spectacle.",
      },
      {
        title: "2. Trainspotting",
        line: "Most useful addiction case",
        reason:
          "It captures attraction and contradiction more fully than a moral warning story, but its style remains ethically unstable.",
      },
      {
        title: "3. Requiem for a Dream",
        line: "Most vulnerable to spectacle",
        reason:
          "It is powerful as warning, but more likely to convert addiction into punishing visual ruin than sustained understanding.",
      },
    ],
  },
  references: [
    {
      heading: "Module teaching material",
      body: "BIOL21312 Lecture 18, Learning and Memory. BIOL21312 Lecture 22, Neuropathology.",
    },
    {
      heading: "Barry et al. (2014)",
      body: "Barry, C.L., McGinty, E.E., Pescosolido, B.A. and Goldman, H.H. (2014) Stigma, discrimination, treatment effectiveness, and policy: public views about drug addiction and mental illness. Psychiatric Services, 65(10), pp.1269-1272.",
    },
    {
      heading: "Bosworth et al. (2024)",
      body: "Bosworth, K.T. et al. (2024) Analysing media portrayals of people with substance use disorder and addiction: A scoping review. Cultures of Science, 7(2 Suppl), pp.126-141.",
    },
    {
      heading: "Hunsinger and Kullar (2019)",
      body: "Hunsinger, B. and Kullar, R. (2019) The association between perceived stigma and substance use disorder treatment outcomes: a review. Substance Abuse and Rehabilitation, 10, pp.1-12.",
    },
    {
      heading: "Jha (2022)",
      body: "Jha, A. (2022) 'The Father': As Real as it Gets to Living with Dementia. Indian Journal of Psychiatry, 64(2), pp.213-215.",
    },
    {
      heading: "Mameli and Luscher (2011)",
      body: "Mameli, M. and Luscher, C. (2011) Synaptic plasticity and addiction: learning mechanisms gone awry. Neuropharmacology, 61(7), pp.1052-1059.",
    },
    {
      heading: "Sawicka et al. (2022)",
      body: "Sawicka, K.M., Patel, N., Chan, D. and Tyndel, F. (2022) The Father: a Neurology Film Club review. Practical Neurology, 22(2), p.171.",
    },
    {
      heading: "Media portrayal of mental illness and treatments",
      body: "Media portrayal of mental illness and its treatments: what effect does it have on people with mental illness? Available at: https://pubmed.ncbi.nlm.nih.gov/16478286/",
    },
    {
      heading: "Communication strategies to counter stigma",
      body: "Communication strategies to counter stigma and improve mental health and substance use disorder policy. Available at: https://pmc.ncbi.nlm.nih.gov/articles/PMC5794622/",
    },
    {
      heading: "Narrative agency in dementia",
      body: "Giving Them a Voice: Challenges to Narrative Agency in People with Dementia. Available at: https://pmc.ncbi.nlm.nih.gov/articles/PMC6473304/",
    },
    {
      heading: "Opioid stigma and policy response",
      body: "Stigma as a fundamental hindrance to the United States opioid overdose crisis response. Available at: https://pmc.ncbi.nlm.nih.gov/articles/PMC6957118/",
    },
    {
      heading: "Film and empathy in teaching",
      body: "Does watching a movie improve empathy? A cluster randomized controlled trial. Available at: https://pmc.ncbi.nlm.nih.gov/articles/PMC6892313/",
    },
  ],
};
