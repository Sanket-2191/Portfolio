import React from "react";
import "./Certificate.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';

function Certificate(props) {
  const myProfileDetails = props.details;
  return (
    <section id="certificate">
      <h2 className="text-center">Certification</h2>
      <div className="certificate-container">
        {myProfileDetails.certifications.map((certificate) => (
          <Card
            key={certificate.certid}
            className="card-style"
            variant="outlined"
            style={{
              backgroundColor: "rgb(46, 47, 52)",
            }}
          >
            <CardHeader title={certificate.coursename} />
            <img
              src={certificate.image}
              alt="course"
              style={{
                height: "300px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <CardContent>
              <p><b>Certified By:</b> {certificate.certifiedby}</p>
              <p><b>User Id:</b> {certificate.userid}</p>
              <p>
                <b>Verify Url:</b>{" "}
                <Link
                  href={certificate.verifyurl}
                  target="_blank"
                  rel="noreferrer"
                  underline="hover"
                  sx={{ color: "lightblue" }}
                >
                  Coding Ninjas
                </Link>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Certificate;
