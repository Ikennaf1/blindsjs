import Image from 'next/image';
import Link from 'next/link';

const CompanyClientsSection = () => {
    return (
        <section>
            <div className="body-margin flex flex-col gap-4">
                <p className="uppercase text-center text-sm">Trusted by companies of all sizes</p>

                <div className="flex flex-row flex-wrap gap-4 justify-center">
                    <Image
                     src="/whatsapp.svg"
                     width="48"
                     height="48"
                     />
                </div>
            </div>
        </section>
    );
}

export default CompanyClientsSection;
