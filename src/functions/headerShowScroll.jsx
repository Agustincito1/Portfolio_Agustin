const [activeLink, setActiveLink] = useState('');

  // Función para manejar la observación de las secciones
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.5, // 50% de la sección visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id); // Actualiza el estado con el ID de la sección
        }
      });
    }, options);

    // Observar cada sección
    sections.forEach(section => observer.observe(section));

    // Cleanup del observer cuando el componente se desmonte
    return () => {
      observer.disconnect();
    };
  }, []);