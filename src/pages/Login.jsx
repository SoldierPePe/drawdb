import { Cardinality, tableColorStripHeight, tableFieldHeight, tableHeaderHeight } from "../data/constants"
import { useAuth } from "../hooks/useAuth"
import { calcPath } from "../utils/calcPath"
import { useEffect, useRef, useState } from "react"

const xOffset = window.innerWidth * 0.5 - 175

function Table({ table, grab }) {
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredField, setHoveredField] = useState(-1)

  const height =
    table.fields.length * tableFieldHeight +
    tableHeaderHeight +
    tableColorStripHeight

  return (
    <foreignObject
      key={table.name}
      x={table.x}
      y={table.y}
      width={450}
      height={height}
      className="drop-shadow-lg rounded-md cursor-move"
      onMouseDown={grab}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`border-2 ${
          isHovered ? "border-dashed border-blue-500" : "border-zinc-300"
        } select-none rounded-lg w-full bg-zinc-100 text-zinc-800`}
      >
        <div
          className={`h-[10px] w-full rounded-t-md`}
          style={{ backgroundColor: table.color }}
        />
        <div className="font-bold h-[40px] flex justify-between items-center border-b border-zinc-400 bg-zinc-200 px-3">
          {table.name}
        </div>
        {table.fields.map((e, i) => (
          <div
            key={i}
            className={`${
              i === table.fields.length - 1 ? "" : "border-b border-gray-400"
            } h-[36px] px-2 py-1 flex justify-between ${e.class}`}
            onClick={() => e.click?.()}
            onMouseEnter={() => setHoveredField(i)}
            onMouseLeave={() => setHoveredField(-1)}
          >
            <div className={hoveredField === i ? "text-zinc-500" : ""}>
              <button
                className={`w-[9px] h-[9px] bg-[#2f68adcc] rounded-full me-2`}
              />
              {e.name}
            </div>
            {e.component}
            <div className="text-zinc-400 text-sm">{e.type}</div>
          </div>
        ))}
      </div>
    </foreignObject>
  )
}

function Relationship({ relationship, tables }) {
  const pathRef = useRef()
  const [refAquired, setRefAquired] = useState(false)
  const [start, setStart] = useState({ x: 0, y: 0 })
  const [end, setEnd] = useState({ x: 0, y: 0 })

  let cardinalityStart = "1"
  let cardinalityEnd = "1"

  switch (relationship.cardinality) {
  case Cardinality.MANY_TO_ONE:
    cardinalityStart = "n"
    cardinalityEnd = "1"
    break
  case Cardinality.ONE_TO_MANY:
    cardinalityStart = "1"
    cardinalityEnd = "n"
    break
  case Cardinality.ONE_TO_ONE:
    cardinalityStart = "1"
    cardinalityEnd = "1"
    break
  default:
    break
  }

  const length = 32

  useEffect(() => {
    setRefAquired(true)
  }, [])

  useEffect(() => {
    if (refAquired && pathRef.current) {
      const pathLength = pathRef.current.getTotalLength()
      const point1 = pathRef.current.getPointAtLength(length)
      const point2 = pathRef.current.getPointAtLength(pathLength - length)

      setStart({ x: point1.x, y: point1.y })
      setEnd({ x: point2.x, y: point2.y })
    }
  }, [refAquired])

  return (
    <g className="select-none" onClick={() => console.log(pathRef.current)}>
      <path
        ref={pathRef}
        d={calcPath({
          ...relationship,
          startTable: {
            x: tables[relationship.startTableId].x,
            y: tables[relationship.startTableId].y,
          },
          endTable: {
            x: tables[relationship.endTableId].x,
            y: tables[relationship.endTableId].y,
          },
        })}
        stroke="gray"
        fill="none"
        strokeWidth={2}
      />
      {pathRef.current && (
        <>
          <circle cx={start.x} cy={start.y} r="12" fill="grey" />
          <text
            x={start.x}
            y={start.y}
            fill="white"
            strokeWidth="0.5"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {cardinalityStart}
          </text>
          <circle cx={end.x} cy={end.y} r="12" fill="grey" />
          <text
            x={end.x}
            y={end.y}
            fill="white"
            strokeWidth="0.5"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {cardinalityEnd}
          </text>
        </>
      )}
    </g>
  )
}

export default function Login() {
  useEffect(() => {
    document.body.setAttribute("theme-mode", "light")
    document.title = "drawDB | Login"
  }, [])

  const { login } = useAuth()

  const [dragging, setDragging] = useState(-1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [zoom] = useState(1)
  const identifierRef = useRef("")
  const passwordRef = useRef("")

  const [diagram] = useState({
    tables: [
      {
        name: "users",
        x: xOffset + 75,
        y:
          window.innerHeight * 0.23 -
          (tableHeaderHeight + 4 * tableFieldHeight + tableColorStripHeight) * 0.5,
        fields: [
          {
            name: "id",
            type: "INT",
          },
          {
            name: "identifier",
            type: "VARCHAR",
            component: (
              <input
                className="w-[180px] rounded-md border border-zinc-400 px-2"
                onChange={e => (identifierRef.current = e.target.value)}
              />
            ),
          },
          {
            name: "password",
            type: "VARCHAR",
            component: (
              <input
                className="w-[180px] rounded-md border border-zinc-400 px-2"
                type="password"
                onChange={e => (passwordRef.current = e.target.value)}
              />
            ),
          },
          {
            name: "username",
            type: "VARCHAR",
          },
          {
            name: "email",
            type: "VARCHAR",
          },
          {
            name: "provider",
            type: "VARCHAR",
          },
          {
            name: "confirmed",
            type: "BOOLEAN",
          },
          {
            name: "blocked",
            type: "BOOLEAN",
          },
          {
            name: "createdAt",
            type: "TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "TIMESTAMP",
          },
        ],
        color: "#7d9dff",
      },
      {
        id: 1,
        name: "Actions",
        x: xOffset - 350,
        y:
          window.innerHeight * 0.9 -
          (tableHeaderHeight + 5 * tableFieldHeight + tableColorStripHeight) * 0.5,
        fields: [
          {
            name: "Login",
            type: "Function",
            class: "cursor-pointer hover:bg-zinc-300",
            click: () => doLogin(),
          },
        ],
        color: "#89e667",
      },
    ],
    relationships: [
      {
        startTableId: 1,
        startFieldId: 0,
        endTableId: 0,
        endFieldId: 0,
        cardinality: "Many to one",
      },
      
    ],
  })

  const [tables, setTables] = useState(diagram.tables)

  const grabTable = (e, id) => {
    setDragging(id)
    setOffset({
      x: e.clientX - tables[id].x,
      y: e.clientY - tables[id].y,
    })
  }

  const moveTable = e => {
    if (dragging !== -1) {
      const dx = e.clientX - offset.x
      const dy = e.clientY - offset.y

      setTables(prev =>
        prev.map((table, i) =>
          i === dragging ? { ...table, x: dx, y: dy } : table,
        ),
      )
    }
  }

  const releaseTable = () => {
    setDragging(-1)
    setOffset({ x: 0, y: 0 })
  }

  function doLogin() {
    login({
      identifier: identifierRef.current,
      password: passwordRef.current,
    })
  }

  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="flex-1 flex-col relative">
          <div className="h-full md:hidden">
            <svg
              className="w-full h-full cursor-grab"
              onMouseUp={releaseTable}
              onMouseMove={moveTable}
              onMouseLeave={releaseTable}
            >
              <defs>
                <pattern
                  id="pattern-circles"
                  x="0"
                  y="0"
                  width="22"
                  height="22"
                  patternUnits="userSpaceOnUse"
                  patternContentUnits="userSpaceOnUse"
                >
                  <circle
                    id="pattern-circle"
                    cx="4"
                    cy="4"
                    r="0.85"
                    fill="rgb(99, 152, 191)"
                  ></circle>
                </pattern>
              </defs>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#pattern-circles)"
              ></rect>
              <g
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: "top left",
                }}
              >
                {diagram.relationships.map((r, i) => (
                  <Relationship key={i} relationship={r} tables={tables} />
                ))}
                {tables.map((t, i) => (
                  <Table key={i} table={t} grab={e => grabTable(e, i)} />
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>
      <hr className="border-zinc-300" />
      <div className="text-center text-sm py-3">
        &copy; 2024 <strong>drawDB</strong> - All right reserved.
      </div>
    </div>
  )
}
