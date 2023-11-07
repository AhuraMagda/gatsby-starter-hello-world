import React from "react";
import { Link } from "gatsby";

export default function ParticipationTables() {
  return (
    <>
      <div className="participation__tables participation__tables__scenarios">
        <h2>SCENARIOS</h2>
        <p>Previous scenarios</p>
        <Link>
          <span>
            <p>SOME SCENARIO</p>
          </span>
        </Link>
        <Link>
          <span>
            <p>SOME SCENARIO</p>
          </span>
        </Link>
        <Link>
          <span>
            <p>SOME SCENARIO</p>
          </span>
        </Link>
        <Link>
          <span>
            <p>SOME SCENARIO</p>
          </span>
        </Link>
      </div>

      <div className="participation__tables participation__tables__form">
        <h2>PARTICIPATION FORM</h2>
        <Link>
          <span>
            <p>download form</p>
          </span>
        </Link>
      </div>

      <div className="participation__tables participation__tables__scenarios">
        <h2>TERMS AND CONDITIONS</h2>
        <Link>
          <span>
            <p>download terms and conditions</p>
          </span>
        </Link>

      </div>
    </>
  );
}