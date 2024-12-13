document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();
  
        // Remove a classe 'active' de todas as abas e conteúdos
        tabs.forEach((t) => t.classList.remove("active"));
        contents.forEach((content) => content.classList.remove("active"));
  
        // Adiciona a classe 'active' à aba clicada
        tab.classList.add("active");
  
        // Mostra o conteúdo correspondente
        const targetId = tab.getAttribute("href").replace("#", "");
        document.getElementById(targetId).classList.add("active");
      });
    });
  
    // Ativa automaticamente a primeira aba ao carregar a página
    tabs[0].classList.add("active");
    contents[0].classList.add("active");
  });

