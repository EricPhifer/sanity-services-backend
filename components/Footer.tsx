import NextImage from "./Image"

const Footer = () => {
  return (
    <div className="flex mx-auto my-6 text-xs text-white flex-col-reverse items-center text-center">
      <div className="flex flex-col">
        <p>&copy; Eric Phifer LLC {new Date().getFullYear()}</p>
        <a href="https://ericphifer.com" target="_blank" rel="noreferrer">
          Designed &amp; Developed by Eric Phifer LLC
        </a>
        <span>
          <a href="https://ericphifer.com/privacypolicy" rel="noreferrer">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="https://ericphifer.com/termsconditions" rel="noreferrer">
            Terms &amp; Conditions
          </a>
        </span>
      </div>
      <div className="flex gap-3">
        <a href="https://codepen.io/Eric-Phifer" className="ml-3">
          <img
            src="../public/codepen-brands.svg"
            width={20}
            height={20}
            alt="CodePen"
          />
        </a>
        <a href="https://github.com/EricPhifer" className="ml-3">
          <img src="../public/github-icon.svg" width={20} height={20} alt="GitHub" />
        </a>
      </div>
    </div>
  )
}

export default Footer
