// Sidebar.jsx
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Sidebar = ({ onFilterChange }) => {
  const categories = [
    {
      name: 'Fiat',
      subcategories: [
        { name: 'Motor', subSubcategories: ['Culata', 'Pistones', 'Bujías'] },
        { name: 'Encendido', subSubcategories: ['Alternador', 'Arranque', 'Bobina de Encendido', "Bujías", "Fusibles", "Bateria"] },
        { name: 'Suspensión', subSubcategories: ['Amortiguadores', 'Frenos'] },
        { name: 'Filtros y Aceites', subSubcategories: ['Aceite', 'Filtro de aire'] },
        { name: 'Inyección', subSubcategories: ['Inyectores', 'Sensor', 'Bomba de inyección', 'Módulo'] },
        { name: 'Refrigeración', subSubcategories: ['Electroventilador', 'Termostato', 'Líquido refrigerante', 'Compresor'] },
      ]
    },
    {
      name: 'Volkswagen',
      subcategories: [
        { name: 'Motor', subSubcategories: ['Culata', 'Pistones', 'Bujías'] },
        { name: 'Encendido', subSubcategories: ['Faros delanteros', 'Luces traseras', 'Intermitentes'] },
        { name: 'Suspensión', subSubcategories: ['Amortiguadores', 'Frenos'] },
        { name: 'Filtros y Aceites', subSubcategories: ['Aceite', 'Filtro de aire'] },
        { name: 'Inyección', subSubcategories: ['Inyectores', 'Sensor', 'Bomba de inyección', 'Módulo'] },
        { name: 'Refrigeración', subSubcategories: ['Electroventilador', 'Termostato', 'Líquido refrigerante', 'Compresor'] },
      ]
    }
  ];

  const handleFilterClick = (category, subcategory, subSubcategory) => {
    // Llama a la función proporcionada por el componente padre para aplicar los filtros
    onFilterChange({ category, subcategory, subSubcategory });
  };

  return (
    <div style={{ width: '250px', padding: '10px' }}>
      <h2 className="product-title">Categorias</h2>
      {categories.map((category, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{category.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {category.subcategories.map((subcat, subIndex) => (
                <Accordion key={subIndex}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`subpanel${subIndex}-content`}
                    id={`subpanel${subIndex}-header`}
                  >
                    <Typography>{subcat.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      {subcat.subSubcategories.map((subSubcat, subSubIndex) => (
                        <ListItem
                          key={subSubIndex}
                          button
                          onClick={() => handleFilterClick(category.name, subcat.name, subSubcat)}
                          style={{ cursor: 'pointer'}}  
                        >
                          <ListItemText primary={subSubcat} />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Sidebar;
