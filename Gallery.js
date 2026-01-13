const Lenders = () => {
  const bankLogos = [
    { name: 'CBA', src: '/logos/cba.png' },
    { name: 'Westpac', src: '/logos/westpac.png' },
    { name: 'ANZ', src: '/logos/anz.png' },
    { name: 'NAB', src: '/logos/nab.png' },
    { name: 'Macquarie', src: '/logos/macquarie.png' },
    { name: 'ING', src: '/logos/ing.png' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-teal text-3xl font-bold mb-4">Compare 30+ Lenders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Waruna and the team at AVAND Home Loans work with Australia's leading banks to find the right rate for your home in Ballarat.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
          {bankLogos.map((logo) => (
            <div key={logo.name} className="grayscale hover:grayscale-0 transition-all duration-300 flex justify-center">
              <img src={logo.src} alt={`${logo.name} Logo`} className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};