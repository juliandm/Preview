import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`

color: #41addd;
text-decoration: none;
text-align: center;
transition: background-color .4s cubic-bezier(.25,.8,.25,1),border-color .6s cubic-bezier(.25,.8,.25,1);
&:hover {
  color: #6cc0e5;
}


`;
