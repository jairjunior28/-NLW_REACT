import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
export function AttendeerList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participants</h1>
        <div className="px-3 py-1.5 w-72 border border-white/10 bg-transparent rounded-lg  flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none h-auto border-0 p-0 ring-0 text-sm"
            placeholder="Search participant"
          />
        </div>
      </div>
      <div className="border border-white/10 rounded-lg">
        <table className="w-full ">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 48 }}
                className="py-5 px-4 text-sm font-semibold text-left"
              >
                <input
                  className="size-4 bg-black/20 rounded border border-white/10 accent"
                  type="checkbox"
                />
              </th>
              <th className="py-5 px-4 text-sm font-semibold text-left">
                Code
              </th>
              <th className="py-5 px-4 text-sm font-semibold text-left">
                Participant
              </th>
              <th className="py-5 px-4 text-sm font-semibold text-left">
                Subscribe date
              </th>
              <th className="py-5 px-4 text-sm font-semibold text-left">
                Checkin date{" "}
              </th>
              <th
                style={{ width: 64 }}
                className="py-5 px-4 text-sm font-semibold text-left"
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 4 }).map((_, i) => {
              return (
                <tr
                  key={i}
                  className="border-b border-white/10 hover:bg-white/5"
                >
                  <td className="py-5 px-4 text-sm text-zinc-300 ">
                    <input
                      className="size-4 bg-black/20 rounded border border-white/10 accent"
                      type="checkbox"
                    />
                  </td>
                  <td className="py-5 px-4 text-sm text-zinc-300 ">4546</td>
                  <td className="py-5 px-4 text-sm text-zinc-300 ">
                    <div className="flex flex-col gap-1">
                      <spam className="font-semibold text-white">
                        Jair Junior
                      </spam>
                      <spam>Event Test</spam>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-sm text-zinc-300 ">
                    8 days before
                  </td>
                  <td className="py-5 px-4 text-sm text-zinc-300 ">
                    2 days before
                  </td>
                  <td className="py-5 px-4 text-sm text-zinc-300 ">
                    <button className="bg-black/20 border border-white/10 rounded-md p-1.5 py">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="py-5 px-4 text-sm text-zinc-300 ">
                Showing 10 to 220 items
              </td>
              <td
                colSpan={3}
                className="py-5 px-4 text-sm text-zinc-300 text-right "
              >
                <div className="inline-flex items-center gap-8">
                  <spam>Page 1 to 22</spam>
                  <div className="flex gap-1.5">
                    <button className="bg-white/10 bg-black/20 border border-white/10 rounded-md p-1.5 py">
                      <ChevronsLeft className="size-4" />
                    </button>{" "}
                    <button className="bg-white/10 bg-black/20 border border-white/10 rounded-md p-1.5 py">
                      <ChevronLeft className="size-4" />
                    </button>{" "}
                    <button className="bg-white/10 bg-black/20 border border-white/10 rounded-md p-1.5 py">
                      <ChevronRight className="size-4" />
                    </button>{" "}
                    <button className="bg-white/10 bg-black/20 border border-white/10 rounded-md p-1.5 py">
                      <ChevronsRight className="size-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
