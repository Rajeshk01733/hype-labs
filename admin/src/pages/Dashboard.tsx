import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import {
  LucideBriefcase,
  FileBarChart2,
  BookOpen,
  LucideContact,
  MailCheck,
  MessageSquareQuote,
} from "lucide-react";
import { useNewsletterSubs } from "@/hooks/useNewsletterSub";
import { Link } from "react-router";
import { useContactForms } from "@/hooks/useContactForm";
import { useCareersOpenings } from "@/hooks/useCareersOpening";
import { useCareersSubmissions } from "@/hooks/useCareersSubmission";
import { useCaseStudy } from "@/hooks/useCaseStudy";
import { useCaseStudyDownloads } from "@/hooks/useCaseStudyDownloads";
import { useSuperAdmin } from "@/hooks/useSuperAdmin";
import { useInsights } from "@/hooks/useInsights";
import { useInsightDownloads } from "@/hooks/useInsightDownloads";

type CardCompProps = {
  href: string;
  heading: string;
  icon: ReactNode;
  count: number | undefined;
};

export default function Dashboard() {
  const { data: careersOpening } = useCareersOpenings();
  const { data: careersSubmission } = useCareersSubmissions();
  const { data: caseStudy } = useCaseStudy();
  const { data: caseStudyDownload } = useCaseStudyDownloads();
  const { data: contact } = useContactForms();
  const { data: insights } = useInsights();
  const { data: insightsDownload } = useInsightDownloads();
  const { data: newsletter } = useNewsletterSubs();
  const { data: superAdmin } = useSuperAdmin();

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight">Hi, Welcome back 👋</h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* <CardComp
          href="/dashboard/brochure/downloads"
          heading="Brochure Downloads"
          count={brochure?.pagination?.total}
          icon={<FileText />}
        /> */}
        <CardComp
          href="/dashboard/careers/careers-opening"
          heading="Careers opening"
          count={careersOpening?.pagination?.total}
          icon={<LucideBriefcase />}
        />
        <CardComp
          href="/dashboard/careers/careers-submission"
          heading="Careers submission"
          count={careersSubmission?.pagination?.total}
          icon={<LucideBriefcase />}
        />
        <CardComp
          href="/dashboard/case-study"
          heading="Case study"
          count={caseStudy?.pagination?.total}
          icon={<BookOpen />}
        />
        <CardComp
          href="/dashboard/case-study/downloads"
          heading="Case Study downloads"
          count={caseStudyDownload?.pagination?.total}
          icon={<BookOpen />}
        />
        <CardComp
          href="/dashboard/contact-form"
          heading="Contact Submission"
          count={contact?.pagination?.total}
          icon={<LucideContact />}
        />
        {/* <CardComp
          href="/dashboard/enquire-form"
          heading="Enquire Submission"
          count={enquire?.pagination?.total}
          icon={<MailQuestion />}
        /> */}
        <CardComp
          href="/dashboard/insights"
          heading="Insights"
          count={insights?.pagination?.total}
          icon={<FileBarChart2 />}
        />
        <CardComp
          href="/dashboard/insights/downloads"
          heading="Insights downloads"
          count={insightsDownload?.pagination?.total}
          icon={<FileBarChart2 />}
        />
        <CardComp
          href="/dashboard/newsletter-subscribers"
          heading="Newsletter Submission"
          count={newsletter?.pagination?.total}
          icon={<MailCheck />}
        />
        {/* <CardComp
          href="/dashboard/testimonial"
          heading="Testimonial"
          count={testimonial?.pagination?.total}
          icon={<MessageSquareQuote />}
        /> */}
        <CardComp
          href="/dashboard/super-admin"
          heading="Super admin"
          count={superAdmin?.data?.length}
          icon={<MessageSquareQuote />}
        />
      </div>
    </>
  );
}

function CardComp({ href, heading, count, icon }: CardCompProps) {
  return (
    <Link to={href}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{heading}</CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{count || 0}</div>
        </CardContent>
      </Card>
    </Link>
  );
}
