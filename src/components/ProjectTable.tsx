export function ProjectTable() {
  const projects = [
    {
      id: 'PR1-T1',
      name: 'Study and Recommend Solutions to address Low Steam Temperature Issue Across OSBL of Stand by N2 Compressor in Unit 11B at MAB Refinery'
    },
    {
      id: 'PR1-06',
      name: 'Providing Capability for Existing U18 at MAB Refinery'
    },
    {
      id: 'PR1-02',
      name: 'Provisions To Nullify The Low Sulfur Fuel Oil (LSFO) Production in MAA Refinery(Feasibility Study)'
    },
    {
      id: 'PR1-05',
      name: 'Provision of Large Volume Discharge Manifolds for SRU Tank Farm for Routing of H2 to 12 locations'
    },
    {
      id: 'PR1-04',
      name: 'Provide Sand Filter on Existing Sanitary Sewage Treatment Unit (similar to CFP Sand Filter)'
    },
    {
      id: 'PR1-01',
      name: 'Feasibility Study on LPG Supply Facilities Project for NOTC at MAA'
    },
    {
      id: 'PR1-03',
      name: 'Feasibility and FEED study for Installation of New Facility for Routing Cold CGO & TGO to HCR Units and Cold VGO to HCR Coker Units at MAB Refinery'
    }
  ];

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl max-h-[180px]">
      <div className="overflow-auto max-h-[180px]">
        <table className="w-full">
          <thead className="sticky top-0 bg-white">
            <tr className="border-b border-gray-200">
              <th className="text-left p-2 text-gray-700 text-xs">Project_ID (FK)</th>
              <th className="text-left p-2 text-gray-700 text-xs">Project_Name</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-2 text-gray-900 text-xs">{project.id}</td>
                <td className="p-2 text-gray-900 text-xs">{project.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
