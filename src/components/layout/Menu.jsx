import { useCallback } from 'react';

import { AddStreamForm } from '@/components/layout/AddStreamForm';
import { LayoutButtons } from '@/components/layout/LayoutButtons';
import { StreamList } from '@/components/streams/StreamList';

import { MOBILE_RECOMMENDED_LAYOUTS, STANDARD_LAYOUTS } from '@/constants/layouts';

export function Menu({
  layout,
  onLayoutChange,
  streams,
  onReorderStreams,
  onAddStream,
  onRemoveStream,
  onResetStreams,
  isOpen,
  onClose,
}) {
  const handleLayoutSelect = useCallback(
    (e) => {
      const value = e.currentTarget.dataset.value;
      if (value) {
        onLayoutChange(value);
        onClose();
      }
    },
    [onLayoutChange, onClose]
  );

  const handleReset = useCallback(() => {
    if (window.confirm('Reset streams to the original list?')) {
      onResetStreams();
    }
  }, [onResetStreams]);

  return (
    <>
      <div className={`menu-panel ${isOpen ? 'open' : ''}`}>
        <section className="menu-section">
          <p className="menu-label">GRID</p>
          <LayoutButtons options={STANDARD_LAYOUTS} layout={layout} onSelect={handleLayoutSelect} />
          <div className="layout-subgroup">
            <p className="layout-subgroup-label">RECOMMENDED FOR MOBILE</p>
            <LayoutButtons
              options={MOBILE_RECOMMENDED_LAYOUTS}
              layout={layout}
              onSelect={handleLayoutSelect}
            />
          </div>
        </section>

        <section className="menu-section">
          <div className="streams-header">
            <p className="menu-label">STREAMS</p>
            <button className="reset-btn" onClick={handleReset} title="Reset to defaults">
              Reset
            </button>
          </div>

          <StreamList
            streams={streams}
            onReorderStreams={onReorderStreams}
            onRemoveStream={onRemoveStream}
          />

          <AddStreamForm streams={streams} onAddStream={onAddStream} />
        </section>
      </div>

      {isOpen && <div className="menu-backdrop" onClick={onClose} />}
    </>
  );
}
