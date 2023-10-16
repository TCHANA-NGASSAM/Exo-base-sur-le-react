export function PanierLegumes({legumes}) {
  function Legume() {

    return(
<>
{legumes.map(item => (
  <p>{item}</p>
))}
</>
    )
  }
    return (
      <div>
        <Legume/>
      </div>
    );
  }
  
  
  