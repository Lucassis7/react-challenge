import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import assetImage from './assets/sad-emoji.png';
import Card from './components/Card';
import Popup from './components/Popup';

function App() {
  const [toolsList, setToolsList] = useState([]);
  const [searchTool, setSearchTool] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [lastSeenTools, setLastSeenTools] = useState([]);

  const totalToolsPerPage = 12;

  useEffect(() => {
    axios
      .get("https://pluga.co/ferramentas_search.json")
      .then((response) => {
        setToolsList(response.data)
      })
  }, []);

  const filteredToolsList = toolsList.filter((tool) =>
    tool.name.toLowerCase().includes(searchTool.toLowerCase())
  );

  const indexOfLastTool = currentPage * totalToolsPerPage;
  const indexOfFirstTool = indexOfLastTool - totalToolsPerPage;
  const currentTools = filteredToolsList.slice(indexOfFirstTool, indexOfLastTool);

  const renderTools = () => {
    if (currentTools.length > 0) {
      return currentTools.map((tool) => (
        <Card key={tool.app_id} data={tool} onCardClick={handleCardClick} />
      ));
    } 

    return (
      <div className="empty-tool-container">
        <img src={assetImage} alt="Sad emoji because there are no tools with the search term entered." />
        <h1>Nenhuma ferramenta encontrada... :/</h1>
      </div>
    )
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsPopupOpen(true);

    setLastSeenTools((previousCards) => {
      const updatedTools = [card, ...previousCards].slice(0, 3);
      return updatedTools;
    });
  };

  return (
    <div className="main-container">
      <input
        className="search-input"
        type="text"
        placeholder="Buscar Ferramenta..."
        value={searchTool}
        onChange={(event) => {
          setSearchTool(event.target.value);
          setCurrentPage(1);
        }}
        data-testid="search-input"
      />
      <div className="tools-container">
          {renderTools()} 
      </div>
      <div>
        {filteredToolsList.length > totalToolsPerPage ? (
          <ul className="pagination-container">
            {Array.from({ length: Math.ceil(filteredToolsList.length / totalToolsPerPage) }, (_, index) => (
              <li key={index} className={currentPage === index + 1 ? "active" : ""} onClick={() => paginate(index + 1)}>
                {index + 1}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="pagination-container">
            <li className="active">1</li>
          </ul>
        )}
      </div>
      {isPopupOpen && selectedCard && (
        <Popup data={selectedCard} onClose={() => setIsPopupOpen(false)} lastSeenTools={lastSeenTools} />
      )}
    </div>
  )
}

export default App
