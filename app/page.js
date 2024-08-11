import Image from "next/image";
import Link from 'next/link';
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";


export default function Home() {
  return (
    <main className="bg-slate-900 flex min-h-screen flex-row items-start p-24">
      <div id="profile" className="fixed flex flex-col w-80">
        <p className="text-4xl">Vitto Genuino</p>
        <p className="py-2">Software Engineer</p>
        <p className="py-2">What do I do?</p>

        <nav className="bg-slate-900 flex flex-col pt-12">
            <ul className="wsm:flex justify-evenly">
              <li className="">
                <Link href="/" className="hover:animate-pulse ">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience">Experience</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#contributions">Contributions</Link>
              </li>
            </ul>
          </nav>
      </div>

      <div id="main" className="flex flex-col ml-80 w-full">
        <div id="about" className="pb-40">
          I'm a 5th year college student taking up a Bachelor's Degree in Computer Science with a Major in Software Technology.
          <br></br>
          <br></br>
          My main focus these days is <strong>Data Engineering</strong> and <strong>Software Architecture</strong>.
          <br></br>
          <br></br>
          When I'm not on my computer, I'm usually playing Golf, working out in the Gym, and Running.
        </div>

        <div id="experience" className="pb-40">
          <p>Experience</p>

          {/* LENA */}
          <Card className="max-w-full mt-10">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/lena.jpg"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Data Engineer Intern</p>
                <p className="text-small text-default-500">
                    Twelve Baskets Analytics, Inc.
                </p>
              </div>
            </CardHeader>
            <Divider/>
            <CardBody>
              <ul className="list-decimal">
                <li>Performed 28 SQL transformations from Oracle SQL to AWS Athena SQL.</li>
                <br></br>
                <li>Worked closely with AWS Glue and AWS Athena Query Editor</li>
              </ul>
            </CardBody>
            <Divider/>
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://www.linkedin.com/company/lenaph/"
              >
                Visit company on LinkedIn.
              </Link>
            </CardFooter>
          </Card>
          {/* LENA */}

          {/* ALTDSI */}
          <Card className="max-w-full mt-10">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/altdsi.png"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Research Assistant</p>
                <p className="text-small text-default-500">
                    Dr. Andrew L. Tan Data Science Institute
                </p>
              </div>
            </CardHeader>
            <Divider/>
            <CardBody>
              <ul className="list-decimal">
                <li>...</li>
                <br></br>
                <li>...</li>
              </ul>
            </CardBody>
            <Divider/>
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://altdsi.dlsu.edu.ph/"
              >
                Visit institute website.
              </Link>
            </CardFooter>
          </Card>
          {/* ALTDSI */}
        </div>
        <div id="projects" className="pb-40">Projects</div>
        <div id="contributions" className="pb-40">Contributions</div>
      </div>
    </main>
  );
}
