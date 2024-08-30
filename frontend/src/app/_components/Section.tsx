interface SectionProps {
    title: string
    content: string
  }
  
  const Section: React.FC<SectionProps> = ({ title, content }) => {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <p className="mt-4 text-gray-600">{content}</p>
        </div>
      </section>
    )
  }
  
  export default Section
  