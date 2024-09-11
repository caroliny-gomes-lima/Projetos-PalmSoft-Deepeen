import React from "react";


function Home() {

  const [isMounted, setMount] = React.useState<boolean>(false);
  const Mount = React.useCallback(() => {

  }, []);

  React.useEffect(() => {
    if (!isMounted) {
      Mount();
      setMount(true);
    }
  }, [Mount, isMounted]);

  return (
    <>
      
    </>
  );
}

export default Home;
