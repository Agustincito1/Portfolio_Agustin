interface cvProps {
  text: string;
}

function CV({ text }: cvProps) {
    return (
      <>
        <button>{text}</button>
      </>
    )
}

export default Profile