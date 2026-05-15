import LegalLayout from '@/components/LegalLayout';

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="December 2024">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">No Personal Data Collection</h2>
          <p className="mb-4">
            We do not collect personal data. We are non-custodial and do not require any personal 
            information to use our platform. You can use SafeDeGen anonymously.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Local Storage</h2>
          <p className="mb-4">
            We use local storage for user preferences such as theme settings, filter options, and 
            display preferences. This data is stored locally in your browser and is not transmitted 
            to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Third-Party APIs</h2>
          <p className="mb-4">
            We use third-party APIs (DexScreener) which may log IP addresses and other technical 
            information for service delivery and analytics. We have no control over their data 
            collection practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Browser Data</h2>
          <p className="mb-4">
            Like most websites, we may automatically collect certain technical information from your 
            browser, including IP address, browser type, and access times, for security and performance 
            monitoring purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
          <p className="mb-4">
            We do not use tracking cookies or advertising pixels. Any cookies used are strictly 
            necessary for the operation of our website and basic functionality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
          <p className="mb-4">
            Since we don't collect personal data, there is minimal risk to your privacy. We implement 
            standard security measures to protect our platform from unauthorized access.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">No Data Sharing</h2>
          <p className="mb-4">
            We do not sell, rent, or share any user data with third parties for marketing purposes. 
            We do not have user profiles to share.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
