import React from 'react';
import Title from './Title';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
const query = graphql`
  {
    allStrapiJobs {
      edges {
        node {
          data {
            attributes {
              desc {
                duties1
                duties2
                id
              }
              company
              date
              position
            }
            id
          }
        }
      }
    }
  }
`;
const Jobs = () => {
  return <h2>jobs component</h2>;
};

export default Jobs;
