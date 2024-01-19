// eslint-disable-next-line react/prop-types
export function SocialMediaBox ({ imgBlack, imgWhite, description, link }) {
  return(
    <div className='tesla-socialmedia-box'>
      <a href={link} target='blank'>
        <img className={`${description}-icon ${description}-icon-black`} src={imgBlack} alt={`${description} item logo black`} />
        <img className={`${description}-icon ${description}-icon-white`} src={imgWhite} alt={`${description} item logo white`} />
      </a>
    </div>
  )
}