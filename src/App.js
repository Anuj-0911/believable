import { Row } from 'react-bootstrap';
import './App.css';
import logos from './designing poster web/cwslogo.png';
import  background1 from './designing poster web/dsp1.png';
import callbox from './designing poster web/Rectangle 154.png';
import deco1 from './designing poster web/Line 103.png';
import {Container,Col,Button} from 'react-bootstrap';
import header2img from './designing poster web/Group 182.png';
import header3img from './designing poster web/Group 4466.png';
import header4img from './designing poster web/Group 4467.png';
import header41img from './designing poster web/Group 4432.png';
import header42img from './designing poster web/Group 4433.png';
import header411img from './designing poster web/Group 1128.png';
import header422img from './designing poster web/Group 4445.png';
import header10img from './designing poster web/Group 4462.png';
import header11img from './designing poster web/Group 4446.png';
import header81img from './designing poster web/Group 4463.png';
import headinglogo2 from './designing poster web/Group 4465.png';
import backseclast from './designing poster web/Group 1815.png';
import testim from './designing poster web/testim.png';
import catimg1 from './designing poster web/Group 1817.png';
import poster1 from './designing poster web/10-1-2021.png';
import poster2 from './designing poster web/ordlance.png';
import poster3 from './designing poster web/Instagram Post – 7.png';
import poster4 from './designing poster web/Instagram Post – 2.png';
import poster5 from './designing poster web/22-1-2021.png';
import poster6 from './designing poster web/combo8.png';
import poster7 from './designing poster web/Group 1813.png';
import poster8 from './designing poster web/Group 1812.png';
import poster9 from './designing poster web/Group 4449.png';
import poster10 from './designing poster web/Instagram Post – 6.png';
import poster11 from './designing poster web/Instagram Post – 4.png';
import poster12 from './designing poster web/Group 4450.png';
import poster13 from './designing poster web/posterlockdown19.png';
import poster14 from './designing poster web/posterlockdown22.png';
import poster15 from './designing poster web/posterlockdown21.png';
import poster16 from './designing poster web/posterlockdown23.png';
import poster17 from './designing poster web/Group 4452.png';
import poster18 from './designing poster web/Group 4451.png';
import poster19 from './designing poster web/combo3.png';
import poster20 from './designing poster web/combo4.png';
function App() {
  return (
    <div className="App">
      <div className="header1" style={
      {
        backgroundImage: `url(${background1})`,
        backgroundSize: '100% auto' ,
        backgroundRepeat:'no-repeat',
        paddingBottom:'200px'
      }
    }>
      <Container>
        <Row>
          <img src={logos} alt="complogo" className="mainlogo"/>
        </Row>
        <Row>
        <Col>
          <h1 className="heading1">Poster design you can trust on</h1>
            <p className="content1">Cogent Web Services is a leading Designing Company which aim to provide
                you with
                <br/> the best services that satisfy all your requirements in a set budget.</p>
        <button style={
        {
          backgroundImage:  `url(${callbox})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundWidth: '200px',
          backgroundColor: 'white',
          marginLeft:'8%',
          marginTop:'4%',
          border:'none',
          height:'auto',
        }
      }>
        <p className="callerbox">CALL NOW</p>
      </button>
          </Col>
        </Row>
      </Container>
      </div>
      <div className="header2">
        <Container>
          <Row>
            <Col sm={1} md={1} xl={1} xs={1}>
            <img src={deco1} alt="deco" className="decorater1" />
            </Col>
            <Col sm={11} md={11} xl={11} xs={11}>
            <h1 className="heading2">Poster designs you can rely on!</h1></Col>
          </Row>
          <Row>
            <Col sm={8} md={8} xl={8} xs={12} >
              <p className="contenthead2">Posters are everywhere like at the place of business, public places, at
                  trade shows and conventions and as a perk to vendors and
                  suppliers. Posters allow us to spread message faster in a simple and
                  affordable way. It helps us to form immediate visual impressions on
                  potential customers. To see plenty of creative poster designs, start a
                  design contest now!
                </p>
                <img src={headinglogo2} className="hding2lg"/>
                <p className="contentpara2">Experienced designers—all rated and reviewed</p>
                <br/>
                <img src={headinglogo2} className="hding2lg"/>
                <p className="contentpara2">Explore plenty of poster design concepts</p>
                <br/>
                <img src={headinglogo2} className="hding2lg"/>
                <p className="contentpara2">Custom poster design as per your needs.</p>
                <br/>
                <Button variant="primary" className="buttonhead2">Get Start Now</Button>
            </Col>
            <Col sm={4} md={4} xl={4} xs={12}>
              <img src={header2img} alt="" className="header2image"/>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header2">
      <Container>
          <Row>
            <Col sm={1} md={1} xl={1} xs={1}>
            <img src={deco1} alt="deco" className="decorater1" />
            </Col>
            <Col sm={11} md={11} xl={11} xs={11}>
            <h1 className="heading2">Inspirational poster design ideas</h1></Col>
          </Row>
          <Row>
            <Col>
            <img src={poster1} className="posters"/>
            </Col>
            <Col>
            <img src={poster2} className="posters"/>
            </Col>
            <Col>
            <img src={poster3} className="posters"/>
            </Col>
            <Col>
            <img src={poster4} className="posters"/>
            </Col>
          </Row>
          <Row>
            <Col>
            <img src={poster5} className="posters"/>
            </Col>
            <Col>
            <img src={poster6} className="posters"/>
            </Col>
            <Col>
            <img src={poster7} className="posters"/>
            </Col>
            <Col>
            <img src={poster8} className="posters"/>
            </Col>
          </Row>
          <Row>
            <Col>
            <img src={poster9} className="posters"/>
            </Col>
            <Col>
            <img src={poster10} className="posters"/>
            </Col>
            <Col>
            <img src={poster11} className="posters"/>
            </Col>
            <Col>
            <img src={poster12} className="posters"/>
            </Col>
          </Row>
          <Row>
            <Col>
            <img src={poster13} className="posters"/>
            </Col>
            <Col>
            <img src={poster14} className="posters"/>
            </Col>
            <Col>
            <img src={poster15} className="posters"/>
            </Col>
            <Col>
            <img src={poster16} className="posters"/>
            </Col>
          </Row>
          <Row>
            <Col>
            <img src={poster17} className="posters"/>
            </Col>
            <Col>
            <img src={poster18} className="posters"/>
            </Col>
            <Col>
            <img src={poster19} className="posters"/>
            </Col>
            <Col>
            <img src={poster20} className="posters"/>
            </Col>
          </Row>
      </Container>
      </div>
      <div className="header2">
        <Container>
          <Row className="gapper">
            <Col sm={1} md={1} xl={1} xs={1}>
            <img src={deco1} alt="deco" className="decorater1" />
            </Col>
            <Col sm={11} md={11} xl={11} xs={11}>
            <h1 className="heading2">Innovative ideas from Professional Designers</h1></Col>
          </Row>
          <Row>
          <Col sm={4} md={4} xs={12} xl={4} >
            <p className="contenthead2">
          There is no better way to design a creative
          poster compared to Poster Design
          Contests. Multiple design ideas will be sent
          by designers from all over the world and
          you can choose the best and impressive
          poster. No annoying apps and templates.
          You'll get 100% unique posters this way!
          </p>
            </Col>
            <Col sm={4} md={4} xs={12} xl={4}>
              <img src={header3img} alt="" className="header2image"/>
            </Col>
            <Col sm={4} md={4} xs={12} xl={4}>
              <img src={header4img} alt="" className="header2image"/>
            </Col>
            </Row>
        </Container>
      </div>
      <div className="header2">
        <Container>
          <Row className="gapper">
            <Col sm={1} md={1} xl={1} xs={1}>
            <img src={deco1} alt="deco" className="decorater1" />
            </Col>
            <Col sm={11} md={11} xl={11} xs={11}>
            <h1 className="heading2">Budget doesn't matter , Best Poster Designs</h1></Col>
          </Row>
          <Row>
          <Col>
            <p className="contenthead2">
            We assure you that your budget doesn't matter much . Our hands-on support and service is available
            for you in your pocket budget.
          </p>
            </Col>
          </Row>
          <Row>
          <Col sm={4} md={4} xs={6} xl={4}>
              <img src={header411img} alt="" className="header3image header4img"/>
            </Col>
            <Col sm={2} md={2} xs={6} xl={2}>
              <img src={header41img} alt="" className="header3image header4img"/>
            </Col>
            <Col sm={4} md={4} xs={6} xl={4}>
              <img src={header422img} alt="" className="header3image header4img"/>
            </Col>
            <Col sm={2} md={2} xs={6} xl={2}>
              <img src={header42img} alt="" className="header3image header4img"/>
            </Col>
            </Row>
            <div className="midcaller">
              <p className="midtext">Place Your Order and grow your business with a attractive posters</p>
              <Button variant="primary midtext">Call Now</Button>
            </div>
            <Row>
              <Col sm={8} md={8} xs={12} xl={8}>
              <img src={header10img} alt="" className="header3image header5img"/>
              </Col>
              <Col sm={4} md={4} xs={12} xl={4}>
              <img src={header11img} alt="" className="header3image header51img"/>
              </Col>
            </Row>
        </Container>
      </div>
      <div className="header2">
        <Container>
          <Row>
            <Col sm={1} md={1} xl={1} xs={1}>
            <img src={deco1} alt="deco" className="decorater1" />
            </Col>
            <Col sm={11} md={11} xl={11} xs={11}>
            <h1 className="heading2">Other categories that may interest you</h1></Col>
          </Row>
          <Row>
            <Col sm={4} xl={4} md={4} xs={12} className="catcol" style={
              { 
                backgroundImage:  `url(${catimg1})`,
                backgroundSize: '96%  85px',
                backgroundRepeat: 'no-repeat'
              }}>
            Logo Designing
            </Col>
            <Col sm={4} xl={4} md={4} xs={12} className="catcol" style={{backgroundImage:  `url(${catimg1})`,
                backgroundSize: '96%  85px',
                backgroundRepeat: 'no-repeat'}}>
            UI/UX Design 
            </Col>
            <Col sm={4} xl={4} md={4} xs={12} className="catcol" style={{ backgroundImage:  `url(${catimg1})`,
                backgroundSize: '96%  85px',
                backgroundRepeat: 'no-repeat'}}>
            Flyer & Boucher
            </Col>
          </Row>
          <Row>
            <Col sm={4} xl={4} md={4} xs={12} className="catcol" style={{ backgroundImage:  `url(${catimg1})`,
                backgroundSize: '96%  85px',
                backgroundRepeat: 'no-repeat'}}>
            Cariculture
            </Col>
            <Col sm={4} xl={4} md={4} xs={12} className="catcol" style={{ backgroundImage:  `url(${catimg1})`,
                backgroundSize: '96%  85px',
                backgroundRepeat: 'no-repeat'}}>
              Face or Character
              Illustration
            </Col>
            <Col sm={4} xl={4} md={4} xs={12} className="catcol" style={{ backgroundImage:  `url(${catimg1})`,
                backgroundSize: '96%  85px',
                backgroundRepeat: 'no-repeat'}}>
            Posters & Banners

            </Col>
          </Row>
          <Row>
            <Col sm={4} xl={4} md={4} xs={12} className="catcol" style={{ backgroundImage:  `url(${catimg1})`,
                backgroundSize: '96%  85px',
                backgroundRepeat: 'no-repeat'}}>
            E-Invitations without photos
            </Col>
            <Col sm={4} xl={4} md={4} xs={12} className="catcol" style={{ backgroundImage:  `url(${catimg1})`,
                backgroundSize: '96%  85px',
                backgroundRepeat: 'no-repeat'}}>
            ID Card & T-Shirt

            </Col>
            <Col sm={4} xl={4} md={4} xs={12} className="catcol" style={{ backgroundImage:  `url(${catimg1})`,
                backgroundSize: '96%  85px',
                backgroundRepeat: 'no-repeat'}}>
            E-Invitations with photos
             </Col>
          </Row>
          <Row>
            <Col sm={4} xl={4} md={4} xs={12} className="catcol" style={{ backgroundImage:  `url(${catimg1})`,
                backgroundSize: '96%  85px',
                backgroundRepeat: 'no-repeat'}}>
                  Visiting Card 
            </Col>
            <Col sm={4} xl={4} md={4} xs={12} className="catcol" style={{ backgroundImage:  `url(${catimg1})`,
                backgroundSize: '96% 85px',
                backgroundRepeat: 'no-repeat'}}>
                  Greeting Cards
            </Col>
            <Col sm={4} xl={4} md={4} xs={12} className="catcol" style={{ backgroundImage:  `url(${catimg1})`,
                backgroundSize: '96%  85px',
                backgroundRepeat: 'no-repeat'}}>
                  Bookmarks
            </Col>
          </Row>
          <Row>
              <Col>
              <img src={header81img} alt="" className="header2img"/>
              </Col>
            </Row>
        </Container>
      </div>
      <div className="header2" >
        <Container>
          <Row>
            <Col sm={1} md={1} xl={1} xs={1}>
            <img src={deco1} alt="deco" className="decorater1" />
            </Col>
            <Col sm={11} md={11} xl={11} xs={11}>
            <h1 className="heading2">Why choosing us for designing</h1></Col>
          </Row>
          <img src={backseclast} className="flexlg" alt="img"/>
          <Row className="gapper">
            <Col sm={1} md={1} xl={1} xs={1}>
            <img src={deco1} alt="deco" className="decorater1" />
            </Col>
            <Col sm={11} md={11} xl={11} xs={11}>
            <h1 className="heading2">Clients Testimonals</h1></Col>
          </Row>
          <img src={testim} className="flexlg" alt="img"/>
        </Container>
      </div>
    </div>
  );
}

export default App;
