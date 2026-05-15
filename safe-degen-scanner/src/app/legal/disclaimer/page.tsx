import LegalLayout from '@/components/LegalLayout';

export default function Disclaimer() {
  return (
    <LegalLayout title="Risk Disclosure & Disclaimer" lastUpdated="December 2024">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Important Risk Notice</h2>
          <p className="mb-4">
            SafeDeGen is a data aggregation tool, not a financial advisor. We provide information and analysis 
            but do not make investment recommendations or provide financial advice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Extreme Risk Warning</h2>
          <p className="mb-4">
            Cryptocurrency trading involves extreme risk. You could lose 100% of your funds. The cryptocurrency 
            market is highly volatile and unpredictable. Never invest more than you can afford to lose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">No Endorsements</h2>
          <p className="mb-4">
            We do not endorse any specific token listed on this platform. All tokens are presented for 
            informational purposes only. Past performance does not indicate future results.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Smart Contract Risk</h2>
          <p className="mb-4">
            We are not responsible for smart contract failures or "rug pulls". Always conduct your own 
            research (DYOR) before investing in any cryptocurrency project.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Data Limitations</h2>
          <p className="mb-4">
            Our data is sourced from third-party providers and may contain inaccuracies or delays. 
            We make no guarantees about the completeness or accuracy of any information provided.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">No Liability</h2>
          <p className="mb-4">
            SafeDeGen and its affiliates shall not be liable for any losses or damages arising from 
            your use of our platform or any investment decisions made based on our information.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
