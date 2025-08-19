import Hero from '@/components/hero-section'
import CtaContact from '@/components/about'
import GroupVipBrands from '@/components/vip-brands'
import AllianceCasino from '@/components/alliance-casino'
import AllianceJoin from '@/components/alliance-join'
import NewsAndVideos from '@/components/news-and-videos'
// import Brandambassador from '@/components/brand-ambassador'
import SecuredAndCertified from '@/components/secured-and-certified'
import FAQ from '@/components/faq'
import CustomerSupport from '@/components/customer-support'

export default function Home() {
    return (
        <>
            <Hero />
            <CtaContact />
            <GroupVipBrands />
            <AllianceCasino />
            <AllianceJoin />
            <NewsAndVideos />
            {/* <Brandambassador /> */}
            <SecuredAndCertified />
            <FAQ />
            <CustomerSupport />
        </>
    )
}
