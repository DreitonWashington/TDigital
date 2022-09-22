import React from 'react';
import {Head} from './components/Header';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { SectionHeader } from './components/SectionHeader';
import {SectionLocalizacao} from './components/SectionLocalizacao'
import { MainSectionServicos } from './components/MainSectionServicos';
import { SectionSegmentos } from './components/SectionSegmentos';
import { Foot } from './components/Footer';



function App() {
  return (
    <>
      <Head/>
      <GlobalStyle/>
      <SectionHeader/>
      <SectionLocalizacao/>
      <MainSectionServicos/>
      <SectionSegmentos/>
      <Foot/>
    </>
  );
}

export default App;
