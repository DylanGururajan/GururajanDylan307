import Link from 'next/link';

export default function Job({params}) {
  let jobInfo = {
    1: {
    desc: "1"
    }, 
    2: {
      desc: "2"
    },
    3: {
      desc: "3"
    }
  };

  return (
    <div>
      This is more information about my job number: {jobInfo[params?.id].desc}
      <br/>
      <Link href="/">Home</Link>
    </div>
  );
}