import React from 'react';
import { Container, FilterContainer, FilterContainerText, InputContainer } from './style'

const FilterHeader = () => (
    <Container>
      <div>
        EQUIPO
      </div>
      <FilterContainer>
        <FilterContainerText>
          Filtrar por fecha de incorporación
        </FilterContainerText>
        <InputContainer>
          INPUT FECHA INIT
        </InputContainer>
        <InputContainer>
          INPUT FECHA FIN
        </InputContainer>
      </FilterContainer>
    </Container>
);

export default FilterHeader;
