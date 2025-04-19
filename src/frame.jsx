import React from 'react';
import ForceDirectedGraph from './conponents/grouph.jsx'

export default function Frame() {
    const graphData = {
        nodes: [
          { id: "Node 1", group: 1 },
          { id: "Node 2", group: 2 },
          { id: "Node 3", group: 1 },
          { id: "Node 4", group: 1 },
          { id: "Node 5", group: 1 },
          { id: "Node 6", group: 2 },
          { id: "Node 7", group: 1 },
          { id: "Node 8", group: 1 },
          { id: "Node 9", group: 1 },
          { id: "Node 10", group: 1 },
          // 更多节点...
        ],
        links: [
          { source: "Node 1", target: "Node 2", value: 1 },
          { source: "Node 2", target: "Node 3", value: 2 },
          { source: "Node 2", target: "Node 4", value: 2 },
          { source: "Node 2", target: "Node 5", value: 2 },
          { source: "Node 2", target: "Node 6", value: 2 },
          { source: "Node 6", target: "Node 7", value: 2 },
          { source: "Node 6", target: "Node 8", value: 2 },
          { source: "Node 6", target: "Node 9", value: 2 },
          { source: "Node 6", target: "Node 10", value: 2 },
          // 更多链接...
        ]
      };

    return (
        <div  >
            <ForceDirectedGraph data={graphData} />
        </div>
    )
}