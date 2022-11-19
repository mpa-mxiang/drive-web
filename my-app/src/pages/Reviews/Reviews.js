import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import './Reviews.css';

const data = [
  {
    author: 'CJ L',
    imgsrc:
      'https://lh3.googleusercontent.com/a/ALm5wu3RSGrG6wVILpQ_5ciuUHwXh5SiWBUEyQao3gA=w60-h60-p-rp-mo-br100',
    content:
      'I had an amazing experience driving with Max! He is incredibly patient, funny, and kind, and I felt very comfortable driving with him. He is also very flexible and went out of his way to accommodate my difficult schedule, which was greatly appreciated. I felt so much more confident after our lessons, and I passed the G test on my first try. Highly recommend taking driving lessons with him!',
    rating: 5,
  },
  {
    author: 'Diana Decaire',
    imgsrc:
      'https://lh3.googleusercontent.com/a-/ACNPEu-IoUUcqN3ZYEnYCYGd9QHaqIp8zSehWkKKKPJGFw=w60-h60-p-rp-mo-ba3-br100',
    content:
      'Max is an excellent teacher.  He is very patient and helps you fell confident.  I am 58 and never drove until last year.  I had Max teach me and I passed my G2 first try. Now I am going for my G and taking lessons with Max again so I am prepared.  I recommend Max to family and friends.  He is a certified driver trainer which helps with a reduction on your insurance.',
    rating: 5,
  },
  {
    author: 'Dominique S',
    imgsrc:
      'https://lh3.googleusercontent.com/a-/ACNPEu8aM0n0VuPcKvPiTCSEPZM1LltMoQrLoG-xJujjLA=w60-h60-p-rp-mo-br100',
    content:
      'My son  was very happy with Max’s patience throughout the course. Max alleviated any anxiety he felt on the day of the actual driving test by familiarizing him with the test area already days before and picking him up 2 hours prior to the test for driving practice. All areas from road driving to parallel parking were covered. My son was successful On his first try! Thanks Max!',
    rating: 5,
  },
  {
    author: 'REETHU ANNA VARGHESE',
    imgsrc:
      'https://lh3.googleusercontent.com/a/ALm5wu2Tgz_v7nSww8mCMoDoIam_WaSrB7UB9X8WNBAh=w60-h60-p-rp-mo-br100',
    content:
      'Max is an excellent instructor. I could pass my G2 in the first go. He prepares students well ahead of the test.',
    rating: 5,
  },
  {
    author: 'Ruby Moreno',
    imgsrc:
      'https://lh3.googleusercontent.com/a/ALm5wu1SnCDSeMJ8TLvuOqODVu-lCzYc_zefdwZXGm2u=w60-h60-p-rp-mo-br100',
    content:
      'Max has helped me gain confidence when driving. Max is Super patient, has such a positive attitude, he is always willing to teach you and make time for you. As well, max will help you practice on what you struggle the most with. Great guy to work with. He makes driving enjoyable. I will always recommend him to all my friends and family!!! Thank you max for your time and patience!!!',
    rating: 5,
  },
  {
    author: 'Marvelously_yours',
    imgsrc:
      'https://lh3.googleusercontent.com/a-/ACNPEu9NcWGrJeHqMNVpp8YyEvfXLOHNZabd_lrNMG_3wQ=w60-h60-p-rp-mo-br100',
    content:
      'Best driving instructor ever!!! This is really not a exaggeration, I was new in the Kitchener-Waterloo area and I was desperate to find a good driving school as soon as possible! Mr. Max made me feel really comfortable and was really caring during our lessons. Today was my g2 test and I am happy to say that I passed on the first try!!! Once again thanks Mr. Max!',
    rating: 5,
  },
];

let NewCard = () => {
  return (
    <Row>
      {data.map(props => {
        return (
          <Col sm={6} md={4} className="mt-3">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <div className="info-box">
                  <img src={props.imgsrc} alt="beer" className="reviews-img" />
                  <br />
                  <Rating
                    initialValue={props.rating}
                    readonly={true}
                    size={23}
                  />
                  <Card.Title>{props.author}</Card.Title>
                  <Card.Text>{props.content}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

const Reviews = () => {
  return (
    <Container>
      <div className="p-0 box my-0 text-center">
        <div className="review-box">
          <h1>Testimonials</h1>
          <NewCard />
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
