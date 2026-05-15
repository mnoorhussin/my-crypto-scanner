import LegalLayout from '@/components/LegalLayout';

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="December 2024">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">User Responsibility</h2>
          <p className="mb-4">
            By using SafeDeGen, you agree that you are responsible for your own trades and investment 
            decisions. You acknowledge that cryptocurrency trading carries significant risk and you 
            should only invest what you can afford to lose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Platform Usage</h2>
          <p className="mb-4">
            SafeDeGen is provided "as is" for informational purposes only. We do not guarantee the 
            accuracy, completeness, or timeliness of any information displayed on our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Prohibited Activities</h2>
          <p className="mb-4">
            Automated scraping of our proprietary data is prohibited. You may not use bots, scrapers, 
            or other automated means to access or collect data from our platform without explicit 
            written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
          <p className="mb-4">
            All content, features, and functionality of SafeDeGen are owned by SafeDeGen Inc. and are 
            protected by copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">No Financial Advice</h2>
          <p className="mb-4">
            Nothing on SafeDeGen constitutes financial advice, investment advice, trading advice, 
            or any other sort of advice. We are not registered financial advisors and do not provide 
            personalized investment recommendations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Third-Party Links</h2>
          <p className="mb-4">
            Our platform may contain links to third-party websites and services. We are not responsible 
            for the content, privacy policies, or practices of any third-party sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, SafeDeGen Inc. shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages arising from your use of our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend access to our platform immediately, without 
            prior notice or liability, for any reason whatsoever, including without limitation if you 
            breach the Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
          <p className="mb-4">
            These Terms shall be interpreted and governed by the laws of the jurisdiction in which 
            SafeDeGen Inc. operates, without regard to conflict of law provisions.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
