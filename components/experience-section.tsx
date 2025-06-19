const milestones = [
  {
    year: "2024",
    title: "Record Settlement",
    description: "$2.5M settlement in personal injury case",
  },
  {
    year: "2023",
    title: "Criminal Defense Victory",
    description: "Successfully defended high-profile criminal case",
  },
  {
    year: "2022",
    title: "Business Law Success",
    description: "Won major corporate litigation case",
  },
  {
    year: "2021",
    title: "Family Law Achievement",
    description: "Landmark custody case victory",
  },
  {
    year: "2020",
    title: "Firm Expansion",
    description: "Opened second office location",
  },
  {
    year: "2019",
    title: "Recognition",
    description: "Named 'Law Firm of the Year'",
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">OUR TRACK RECORD</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of our major achievements and milestones that demonstrate our commitment to excellence in legal
            representation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-400"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-400">
                    <div className="text-2xl font-bold text-yellow-400 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
