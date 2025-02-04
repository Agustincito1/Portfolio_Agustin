interface profileProps {
  location: string;
  title: string;
}

function Profile({ location, title }: profileProps) {
  return (
    <div>
      <img src={location} alt={title} />
    </div>
  )
}

export default Profile