import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  const blogData = [
    {
      tag: "Company News",
      title: "New Office Opened",
      text: "We are excited to announce the opening of our new office in San Francisco.",
      author: "John Doe, 2 days ago",
      action: () => alert("Read more about the new office."),
    },
    {
      tag: "Product Update",
      title: "Version 2.0 Released",
      text: "Our latest version comes with several new features and improvements.",
      author: "Jane Smith, 1 week ago",
      action: () => alert("Explore the new features."),
    },
    {
      tag: "Company News",
      title: "New Office Opened",
      text: "We are excited to announce the opening of our new office in San Francisco.",
      author: "John Doe, 2 days ago",
      action: () => alert("Read more about the new office."),
    },
    {
      tag: "Product Update",
      title: "Version 2.0 Released",
      text: "Our latest version comes with several new features and improvements.",
      author: "Jane Smith, 1 week ago",
      action: () => alert("Explore the new features."),
    },
    {
      tag: "Product Update",
      title: "Version 2.0 Released",
      text: "Our latest version comes with several new features and improvements.",
      author: "Jane Smith, 1 week ago",
      action: () => alert("Explore the new features."),
    },
    // Add more blog entries as needed
  ];

  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Blog Stories</h1>
            <p className="font13">
              Discover the latest updates and insights from our team.
              <br />
              Stay tuned for exciting news and product launches.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            {blogData.map((blog, index) => (
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" key={index}>
                <BlogBox
                  tag={blog.tag}
                  title={blog.title}
                  text={blog.text}
                  author={blog.author}
                  action={blog.action}
                />
              </div>
            ))}
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("Load more blogs")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Hear from our clients and partners about their experiences with our products.
              <br />
              Your feedback helps us grow and improve.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
