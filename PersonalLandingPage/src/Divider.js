function Divider ({ number, text }) {
    return (
      <>
        <h5 className="light mt-5 numbered-heading">
          <span className="primary">{number}</span> 
          <p>{text}</p>
          <div className="divider-line"></div>
        </h5>
      </>
    )
}

export default Divider;