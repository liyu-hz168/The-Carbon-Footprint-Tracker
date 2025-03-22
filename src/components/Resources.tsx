import { Header } from "./Header";
import { Link } from "react-router-dom";

const resources = [
  {
    category: "📚 General Climate & Carbon Footprint Education",
    links: [
      { title: "Project Drawdown", url: "https://drawdown.org/" },
      { title: "Carbon Footprint Calculator (EPA)", url: "https://www3.epa.gov/carbon-footprint-calculator/" },
      { title: "Global Footprint Network", url: "https://www.footprintnetwork.org/" },
      { title: "ClimateScience", url: "https://climatescience.org/" },
      { title: "BBC Future Planet", url: "https://www.bbc.com/future/columns/future-planet" }
    ],
  },
  {
    category: "💡 Practical Guides on Sustainable Living",
    links: [
      { title: "Sustainable Jungle", url: "https://www.sustainablejungle.com/" },
      { title: "The Story of Stuff", url: "https://www.storyofstuff.org/" },
      { title: "UN Sustainable Development Goals", url: "https://sdgs.un.org/goals" },
      { title: "Low Impact Living", url: "https://www.lowimpact.org/" }
    ],
  },
  {
    category: "🌍 Carbon Offsetting & Sustainable Travel",
    links: [
      { title: "Gold Standard", url: "https://www.goldstandard.org/" },
      { title: "Cool Effect", url: "https://www.cooleffect.org/" },
      { title: "Flight Emissions Calculator (ICAO)", url: "https://www.icao.int/environmental-protection/Carbonoffset/Pages/default.aspx" },
      { title: "Sustainable Travel International", url: "https://sustainabletravel.org/" }
    ],
  },
  {
    category: "🍽️ Sustainable Food & Diet Choices",
    links: [
      { title: "EAT-Lancet Report", url: "https://eatforum.org/eat-lancet-commission/" },
      { title: "FoodPrint", url: "https://foodprint.org/" },
      { title: "WWF’s Livewell Plate", url: "https://www.wwf.org.uk/what-we-do/livewell" }
    ],
  },
  {
    category: "🏡 Green Home & Energy Efficiency",
    links: [
      { title: "Energy Star (EPA)", url: "https://www.energystar.gov/" },
      { title: "DSIRE", url: "https://www.dsireusa.org/" },
      { title: "Home Energy Saver", url: "https://hes.lbl.gov/consumer/" }
    ],
  },
  {
    category: "🚗 Eco-Friendly Transportation",
    links: [
      { title: "Alternative Fuels Data Center", url: "https://afdc.energy.gov/" },
      { title: "EV Compare", url: "https://evcompare.io/" },
      { title: "Bike Citizens", url: "https://www.bikecitizens.net/" }
    ],
  },
  {
    category: "🛍️ Ethical Shopping & Circular Economy",
    links: [
      { title: "Good On You", url: "https://goodonyou.eco/" },
      { title: "Buy Me Once", url: "https://buymeonce.com/" },
      { title: "B Corp Directory", url: "https://bcorporation.net/directory" },
      { title: "Too Good To Go", url: "https://toogoodtogo.com/" }
    ],
  },
  {
    category: "🎧 Podcasts & Videos for Climate Education",
    links: [
      { title: "How to Save a Planet (Podcast)", url: "https://gimletmedia.com/shows/howtosaveaplanet" },
      { title: "TED Talks on Climate Change", url: "https://www.ted.com/topics/climate+change" },
      { title: "Our Changing Climate (YouTube)", url: "https://www.youtube.com/c/OurChangingClimate" },
      { title: "DW Planet A (YouTube)", url: "https://www.youtube.com/playlist?list=PLT6yxVwBEbi0PQsT4aT_VRWXxxJubTx6B" }
    ],
  }
];

const ResourceSection = ({ category, links }: { category: string; links: { title: string; url: string }[] }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold text-green-700 mb-2">{category}</h2>
    <ul className="list-disc list-inside space-y-1">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Resources = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <div className="absolute top-4 left-4">
            <Link to="/">
                <button className="px-6 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600">
                ← Back to Dashboard
                </button>
            </Link>
        </div>
        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">🌿 Sustainability & Carbon Footprint Resources</h1>
        {resources.map((section, index) => (
          <ResourceSection key={index} category={section.category} links={section.links} />
        ))}
      </div>
    </div>
  );
};

export { Resources };
