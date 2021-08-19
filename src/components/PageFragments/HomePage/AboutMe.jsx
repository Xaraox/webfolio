import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AboutTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `G'day !! My name is Arvy Salazar. I'm a recent computer science graduate. I am an aspiring full 
    stack web developer who is passionate about various web technologies. Most of my knowledge and experience
    is in frontend web technologies but hoping too expand that to backend technology and  and improving my website design.
    In saying that, this website is made using a Gatsby Starter and the credit goes to Rolwin Reevan however in the near future
    this website might change using my own design. 
    `,
  paraTwo: `Currently I am building my skills in web technologies namely the MERN stack using docker and graphql.  
  I'm always ready to learn and improve.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Arvy', 'Salazar', 'Sydney', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="place.png"
            height={60}
            alt="location image"
            textH4="Based in"
            textH3="Sydney, NSW, Australia"
          />
        </Col>
        {/* TODO: change something smart */}
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="shield.png"
            alt="motorcycle image"
            textH4="Marvel"
            textH3="&quot;Excelsior&quot;"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Comp Sci in"
            textH3="Univesity of Wollongong"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
